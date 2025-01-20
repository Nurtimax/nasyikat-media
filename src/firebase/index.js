import { initializeApp } from 'firebase/app';
import { getPerformance } from 'firebase/performance';
import { getAnalytics } from 'firebase/analytics';

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBxESt0wdZKkOJrkjOIvHdLuIK1tb4wqZQ',
  authDomain: 'nasyikat-media-a5dc7.firebaseapp.com',
  projectId: 'nasyikat-media-a5dc7',
  storageBucket: 'nasyikat-media-a5dc7.firebasestorage.app',
  messagingSenderId: '650994835531',
  appId: '1:650994835531:web:516d6f1d3b7e34a06fedce',
  measurementId: 'G-ME19Q011DD',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Performance Monitoring and get a reference to the service
const perf = getPerformance(app);
export const analytics = getAnalytics(app);
