// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyCjS87ymkEGRNkq6MD80kOwo1xDDYOM7TM',
	authDomain: 'fir-v9-nextjs.firebaseapp.com',
	projectId: 'fir-v9-nextjs',
	storageBucket: 'fir-v9-nextjs.appspot.com',
	messagingSenderId: '651574757293',
	appId: '1:651574757293:web:cacf5bf0c133b307614324',
	measurementId: 'G-XFQFNW3BFN'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app); // access firebase storage in this application
