import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC6EH4rS2KB1tlKDA79K8tc25rAds8zaGo",
  authDomain: "deeditup-a7512.firebaseapp.com",
  projectId: "deeditup-a7512",
  storageBucket: "deeditup-a7512.appspot.com",
  messagingSenderId: "655197318756",
  appId: "1:655197318756:web:df6726fd12e5b22387f971",
  measurementId: "G-HG50P3N2GV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Add Google auth provider and export it
export const provider = new GoogleAuthProvider();

const analytics = getAnalytics(app);
