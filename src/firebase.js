// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics, logEvent } from "firebase/analytics"
import FIREBASE_CONFIG from './fb.json'

// Initialize Firebase
const app = initializeApp(FIREBASE_CONFIG)
export const analytics = getAnalytics(app)
