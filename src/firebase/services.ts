import { db } from './config';
import { collection, addDoc, Timestamp, query, where, getDocs, getCountFromServer, onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';

// Collection references
const earlybirdRef = collection(db, 'earlybird_email_list');
const messagesRef = collection(db, 'website_messages');

/**
 * Add a new earlybird signup to Firestore
 * @param email - The email address to save
 * @returns Promise with the document ID
 */
export const addEarlybirdSignup = async (email: string) => {
  try {
    // Check if email already exists
    const existingEmail = await checkExistingEmail(email);
    if (existingEmail) {
      throw new Error('Email already registered');
    }
    
    // Add new document with email and timestamp
    // Using the same structure as in the Flutter app
    const docRef = await addDoc(earlybirdRef, {
      email: email,
      timestamp: Timestamp.now(),
    });
    
    console.log('E-Mail saved:', email);
    return docRef.id;
  } catch (error) {
    console.error('Error adding earlybird signup:', error);
    throw error;
  }
};

/**
 * Check if an email already exists in the earlybird collection
 * @param email - The email address to check
 * @returns Promise<boolean> - True if email exists, false otherwise
 */
export const checkExistingEmail = async (email: string): Promise<boolean> => {
  try {
    const emailQuery = query(earlybirdRef, where('email', '==', email));
    const querySnapshot = await getDocs(emailQuery);
    
    return !querySnapshot.empty;
  } catch (error) {
    console.error('Error checking existing email:', error);
    throw error;
  }
};

/**
 * Interface for website contact message data
 */
export interface ContactMessage {
  email: string;
  subject: string;
  message: string;
}

/**
 * Add a new contact message to Firestore
 * @param messageData - The message data containing email, subject, and message
 * @returns Promise with the document ID
 */
export const sendContactMessage = async (messageData: ContactMessage) => {
  try {
    // Add new document with message data and timestamp
    const docRef = await addDoc(messagesRef, {
      ...messageData,
      timestamp: Timestamp.now(),
      status: 'unread',
    });
    
    console.log('Contact message sent:', messageData.email);
    return docRef.id;
  } catch (error) {
    console.error('Error sending contact message:', error);
    throw error;
  }
};

/**
 * Get the count of earlybird signups
 * @returns Promise with the count of signups
 */
export const getEarlybirdSignupCount = async (): Promise<number> => {
  try {
    // Use getCountFromServer for more efficient counting, especially with large collections
    const snapshot = await getCountFromServer(earlybirdRef);
    const count = snapshot.data().count;
    console.log('Fetched earlybird count:', count);
    return count;
  } catch (error) {
    console.error('Error getting earlybird signup count:', error);
    // Return 0 as fallback to avoid breaking the UI
    return 0;
  }
};

/**
 * Calculate the remaining spots based on total available and current signups
 * @param signupCount - The current count of signups
 * @param totalSpots - The total number of spots available (default: 1000000)
 * @returns The number of remaining spots
 */
export const calculateRemainingSpots = (signupCount: number, totalSpots: number = 1000000): number => {
  const remaining = totalSpots - signupCount;
  return remaining > 0 ? remaining : 0;
};

/**
 * Custom hook for getting the earlybird signup count with animation
 * @returns An object containing the signup count, remaining spots, and loading state
 */
export const useEarlybirdCount = (totalSpots: number = 1000000) => {
  const [signupCount, setSignupCount] = useState(0);
  const [remainingSpots, setRemainingSpots] = useState(totalSpots);
  const [displayedRemaining, setDisplayedRemaining] = useState(totalSpots);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Animation effect to count down from 1,000,000 to actual remaining
  useEffect(() => {
    if (!loading && !animationComplete && remainingSpots < totalSpots) {
      let startValue = totalSpots;
      const endValue = remainingSpots;
      const duration = 3000; // 3 seconds
      const stepTime = 30; // update every 30ms
      const totalSteps = duration / stepTime;
      const stepSize = Math.ceil((startValue - endValue) / totalSteps);
      
      let currentStep = 0;
      const animationTimer = setInterval(() => {
        currentStep++;
        const nextValue = Math.max(startValue - stepSize, endValue);
        startValue = nextValue;
        setDisplayedRemaining(nextValue);
        
        if (nextValue <= endValue || currentStep >= totalSteps) {
          clearInterval(animationTimer);
          setDisplayedRemaining(endValue);
          setAnimationComplete(true);
        }
      }, stepTime);
      
      return () => clearInterval(animationTimer);
    } else if (!loading && !animationComplete && remainingSpots === totalSpots) {
      // If there are no signups yet, just mark animation as complete
      setAnimationComplete(true);
    }
  }, [loading, remainingSpots, animationComplete, totalSpots]);

  useEffect(() => {
    // Initial count fetch
    const fetchInitialCount = async () => {
      try {
        setLoading(true);
        const count = await getEarlybirdSignupCount();
        
        // Default to 0 if count is undefined or null
        const safeCount = count ?? 0;
        
        setSignupCount(safeCount);
        const calculatedRemaining = calculateRemainingSpots(safeCount, totalSpots);
        setRemainingSpots(calculatedRemaining);
        setError(false);
        
        // Set initial displayed value based on animation state
        setDisplayedRemaining(totalSpots);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching initial signup count:', err);
        // Use fallback values on error
        setSignupCount(0);
        setRemainingSpots(totalSpots);
        setDisplayedRemaining(totalSpots);
        setError(true);
        setLoading(false);
      }
    };

    fetchInitialCount();
    
    // Set up real-time listener for new signups
    const unsubscribe = onSnapshot(
      earlybirdRef,
      (snapshot) => {
        const newCount = snapshot.size;
        setSignupCount(newCount);
        const newRemaining = calculateRemainingSpots(newCount, totalSpots);
        
        // If initial animation is complete, handle real-time updates
        if (animationComplete) {
          // Only animate if the number actually decreased
          if (newRemaining < remainingSpots) {
            // Animate with a quick transition (500ms)
            const current = remainingSpots;
            const diff = current - newRemaining;
            const steps = 10; // 10 steps
            const stepSize = Math.ceil(diff / steps);
            const stepTime = 50; // 50ms per step, total 500ms
            
            let currentValue = current;
            let stepCount = 0;
            
            const quickTimer = setInterval(() => {
              stepCount++;
              currentValue = Math.max(currentValue - stepSize, newRemaining);
              setDisplayedRemaining(currentValue);
              
              if (currentValue <= newRemaining || stepCount >= steps) {
                clearInterval(quickTimer);
                setDisplayedRemaining(newRemaining);
              }
            }, stepTime);
          } else if (newRemaining !== remainingSpots) {
            // Update immediately if not decreasing or same
            setDisplayedRemaining(newRemaining);
          }
        }
          
        setRemainingSpots(newRemaining);
        setError(false);
        console.log("Real-time update detected: New count =", newCount);
      },
      (error) => {
        console.error("Real-time listener error:", error);
        setError(true);
      }
    );
    
    // Clean up listener on unmount
    return () => unsubscribe();
  }, [totalSpots, animationComplete]);

  return {
    signupCount,
    remainingSpots,
    loading,
    error,
    displayedRemaining,
    animationComplete,
    formattedRemaining: displayedRemaining.toLocaleString('en-US')
  };
};