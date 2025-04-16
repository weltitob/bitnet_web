# Firebase Setup for BitNet Website

This document explains how to properly set up Firebase for the earlybird signup feature.

> **Note:** The Firebase configuration has been updated to use the existing BitNet Firebase project. The appId in the configuration may need to be updated with the correct web app ID from your Firebase console.

## Setup Steps

1. **Create a Firebase project** (if you don't already have one):
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project"
   - Follow the setup steps

2. **Enable Firestore Database**:
   - In your Firebase project, go to "Firestore Database"
   - Click "Create database"
   - Choose "Start in production mode" or "Start in test mode" (for development)
   - Select a location close to your target audience
   - Click "Enable"

3. **Update Firebase Configuration**:
   - In the Firebase console, go to Project Settings (gear icon)
   - Scroll down to "Your apps" section
   - If you don't have a web app, click the web icon (</>) to create one
   - Register your app with a nickname
   - Copy the Firebase configuration object

4. **Update the configuration in your code**:
   - Open `/src/firebase/config.ts`
   - Replace the placeholder configuration with your actual Firebase configuration:

```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

5. **Set up Firestore Security Rules**:
   - In the Firebase console, go to "Firestore Database" > "Rules"
   - Set up appropriate security rules, for example:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow admin users to read/write all documents
    match /{document=**} {
      allow read, write: if request.auth != null && request.auth.token.admin == true;
    }
    
    // Allow users to create earlybird signups but not read all of them
    match /earlybird_email_list/{emailId} {
      allow create: if true;  // Anyone can sign up
      allow read: if false;   // Only admins can read (via the rule above)
    }
  }
}
```

## How the Earlybird System Works

1. When a user submits their email on the earlybird page, the `addEarlybirdSignup` function in `src/firebase/services.ts` is called.

2. The function first checks if the email already exists in the database to prevent duplicates.

3. If the email is new, it's saved to the "earlybird_email_list" collection with:
   - The email address
   - A timestamp

4. The user sees a success message after their email is successfully stored.

## Accessing Earlybird Data

To access the list of earlybird signups:

1. Go to the Firebase Console > Firestore Database
2. Look for the "earlybird_email_list" collection
3. You'll see documents with the stored emails and timestamps

You can also:
- Export this data as a CSV for use in email marketing tools
- Create admin-only web interfaces to view this data
- Set up Firebase Functions to process these emails (e.g., send welcome emails)

## Troubleshooting

- If you see "Error adding earlybird signup" in the console, check that your Firebase configuration is correct.
- If users can submit but data isn't saving, verify that your security rules allow creating new documents.
- For Firebase-specific issues, refer to the [Firebase documentation](https://firebase.google.com/docs).