import { db } from './config';
import { collection, addDoc, Timestamp, query, where, getDocs } from 'firebase/firestore';

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