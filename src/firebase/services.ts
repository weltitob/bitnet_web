import { db } from './config';
import { collection, addDoc, Timestamp, query, where, getDocs, getCountFromServer, onSnapshot } from 'firebase/firestore';
import { useState, useEffect, useRef } from 'react';
import * as React from 'react';

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
  // Use a reducer for better state synchronization
  interface CountState {
    signupCount: number;
    remainingSpots: number;
    displayedRemaining: number;
    loading: boolean;
    error: boolean;
    initialAnimationComplete: boolean;
    // Track if we've done the initial data load
    dataInitialized: boolean;
    // Track active animations to prevent conflicts
    animationInProgress: boolean;
  }

  // Initial state
  const initialState: CountState = {
    signupCount: 0,
    remainingSpots: totalSpots,
    displayedRemaining: totalSpots,
    loading: true,
    error: false,
    initialAnimationComplete: false,
    dataInitialized: false,
    animationInProgress: false
  };

  // Reducer for synchronized state updates
  const [state, dispatch] = React.useReducer((state: CountState, action: any): CountState => {
    switch (action.type) {
      case 'START_LOADING':
        return { ...state, loading: true };
      
      case 'INITIAL_DATA_LOADED': {
        const { count } = action.payload;
        const calculatedRemaining = calculateRemainingSpots(count, totalSpots);
        
        return {
          ...state,
          signupCount: count,
          remainingSpots: calculatedRemaining,
          // Keep displayedRemaining at totalSpots until animation
          displayedRemaining: totalSpots,
          loading: false,
          error: false,
          dataInitialized: true
        };
      }
      
      case 'START_INITIAL_ANIMATION': {
        return {
          ...state,
          animationInProgress: true
        };
      }
      
      case 'UPDATE_DISPLAYED_COUNT': {
        return {
          ...state,
          displayedRemaining: action.payload.value
        };
      }
      
      case 'COMPLETE_INITIAL_ANIMATION': {
        return {
          ...state,
          initialAnimationComplete: true,
          displayedRemaining: state.remainingSpots,
          animationInProgress: false
        };
      }
      
      case 'REAL_TIME_UPDATE': {
        const { count } = action.payload;
        const newRemaining = calculateRemainingSpots(count, totalSpots);
        
        return {
          ...state,
          signupCount: count,
          remainingSpots: newRemaining,
          // Don't update displayedRemaining yet - that happens in animation
        };
      }
      
      case 'UPDATE_DISPLAYED_WITH_ANIMATION': {
        // For small incremental updates after initial animation
        return {
          ...state,
          animationInProgress: true 
        };
      }
      
      case 'COMPLETE_UPDATE_ANIMATION': {
        return {
          ...state,
          displayedRemaining: state.remainingSpots,
          animationInProgress: false
        };
      }
      
      case 'ERROR': {
        return {
          ...state,
          error: true,
          loading: false
        };
      }
      
      default:
        return state;
    }
  }, initialState);
  
  // Destructure state for convenience
  const {
    signupCount,
    remainingSpots,
    displayedRemaining,
    loading,
    error,
    initialAnimationComplete,
    dataInitialized,
    animationInProgress
  } = state;
  
  // Reference for tracking animation timers
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastFetchedCountRef = useRef<number>(0);
  
  // Clear any existing animation when component unmounts or
  // before starting a new animation
  const clearAnimationTimer = () => {
    if (animationTimerRef.current) {
      clearInterval(animationTimerRef.current);
      animationTimerRef.current = null;
    }
  };
  
  // Effect for initial data fetch - only runs once
  useEffect(() => {
    let isMounted = true; // Track if component is mounted
    
    // Initial count fetch
    const fetchInitialCount = async () => {
      try {
        dispatch({ type: 'START_LOADING' });
        
        const count = await getEarlybirdSignupCount();
        
        // Only update state if the component is still mounted
        if (isMounted) {
          // Store for comparison
          lastFetchedCountRef.current = count ?? 0;
          
          dispatch({ 
            type: 'INITIAL_DATA_LOADED', 
            payload: { count: count ?? 0 } 
          });
        }
      } catch (err) {
        console.error('Error fetching initial signup count:', err);
        if (isMounted) {
          dispatch({ type: 'ERROR' });
        }
      }
    };

    fetchInitialCount();
    
    // Safe wrapper to handle async listener callbacks
    const safeDispatch = (action) => {
      // Only dispatch if component is still mounted
      if (isMounted) {
        dispatch(action);
      }
    };
    
    // Set up real-time listener for updates with better error handling
    let unsubscribe;
    try {
      unsubscribe = onSnapshot(
        earlybirdRef,
        (snapshot) => {
          try {
            if (!isMounted) return; // Skip processing if unmounted
            
            const newCount = snapshot.size;
            console.log("Real-time update: Count =", newCount, "Previous =", lastFetchedCountRef.current);
            
            // Only process if this is different from our last known count
            if (newCount !== lastFetchedCountRef.current) {
              lastFetchedCountRef.current = newCount;
              
              safeDispatch({
                type: 'REAL_TIME_UPDATE',
                payload: { count: newCount }
              });
            }
          } catch (error) {
            console.error("Error processing real-time update:", error);
          }
        },
        (error) => {
          // Log but handle gracefully to prevent unhandled promise rejections
          if (error && error.message?.includes("message channel closed")) {
            console.log("Firebase connection closed - this is normal during navigation");
          } else {
            console.error("Firebase listener error:", error);
            if (isMounted) {
              dispatch({ type: 'ERROR' });
            }
          }
        }
      );
    } catch (e) {
      console.error("Error setting up Firebase listener:", e);
    }
    
    // Clean up listener on unmount
    return () => {
      isMounted = false;
      clearAnimationTimer();
      
      // Safely unsubscribe from Firebase listener
      if (unsubscribe) {
        try {
          unsubscribe();
        } catch (e) {
          console.log("Error during Firebase unsubscribe (this is normal):", e.message);
        }
      }
    };
  }, [totalSpots]); // Only depends on totalSpots which shouldn't change
  
  // Effect for initial animation after data is loaded
  useEffect(() => {
    // If data is loaded but animation hasn't started yet
    if (dataInitialized && !initialAnimationComplete && !animationInProgress && !loading) {
      // If no signups yet, just mark as complete
      if (remainingSpots === totalSpots) {
        dispatch({ type: 'COMPLETE_INITIAL_ANIMATION' });
        return;
      }
      
      // Start animation
      dispatch({ type: 'START_INITIAL_ANIMATION' });
      
      clearAnimationTimer(); // Clear any existing animations
      
      // Animate from totalSpots to actual remaining
      let startValue = totalSpots;
      const endValue = remainingSpots;
      const duration = 3000; // 3 seconds
      const stepTime = 30; // update every 30ms
      const totalSteps = duration / stepTime;
      const stepSize = Math.ceil((startValue - endValue) / totalSteps);
      
      let currentStep = 0;
      animationTimerRef.current = setInterval(() => {
        currentStep++;
        const nextValue = Math.max(startValue - stepSize, endValue);
        startValue = nextValue;
        
        dispatch({
          type: 'UPDATE_DISPLAYED_COUNT',
          payload: { value: nextValue }
        });
        
        if (nextValue <= endValue || currentStep >= totalSteps) {
          clearAnimationTimer();
          dispatch({ type: 'COMPLETE_INITIAL_ANIMATION' });
        }
      }, stepTime);
    }
  }, [
    dataInitialized,
    initialAnimationComplete,
    animationInProgress,
    loading,
    remainingSpots,
    totalSpots
  ]);
  
  // Effect for handling real-time updates after initial animation
  useEffect(() => {
    // Only run this effect after initial animation is complete
    // and when we're not already animating
    if (initialAnimationComplete && !animationInProgress && displayedRemaining !== remainingSpots) {
      // Now we can safely animate to the new value
      
      // Only animate if the value is decreasing
      if (remainingSpots < displayedRemaining) {
        dispatch({ type: 'UPDATE_DISPLAYED_WITH_ANIMATION' });
        
        clearAnimationTimer(); // Clear any existing animations
        
        // Quick animation to the new value
        let currentValue = displayedRemaining;
        const endValue = remainingSpots;
        const steps = 15; // Slightly more steps for smoother animation
        const diff = currentValue - endValue;
        const stepSize = Math.ceil(diff / steps);
        const stepTime = 40; // 40ms per step
        
        let stepCount = 0;
        animationTimerRef.current = setInterval(() => {
          stepCount++;
          const nextValue = Math.max(currentValue - stepSize, endValue);
          currentValue = nextValue;
          
          dispatch({
            type: 'UPDATE_DISPLAYED_COUNT',
            payload: { value: nextValue }
          });
          
          if (nextValue <= endValue || stepCount >= steps) {
            clearAnimationTimer();
            dispatch({ type: 'COMPLETE_UPDATE_ANIMATION' });
          }
        }, stepTime);
      } else {
        // If the count increased or remained the same, just update directly
        dispatch({
          type: 'UPDATE_DISPLAYED_COUNT',
          payload: { value: remainingSpots }
        });
      }
    }
  }, [
    initialAnimationComplete,
    animationInProgress,
    displayedRemaining,
    remainingSpots
  ]);

  // Return values and formatted display for components to use
  return {
    signupCount,
    remainingSpots,
    loading,
    error, 
    displayedRemaining,
    animationComplete: initialAnimationComplete,
    formattedRemaining: displayedRemaining.toLocaleString('en-US')
  };
};