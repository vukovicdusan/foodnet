import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCK5L9zhNN0e8AaK1swxU5Gpgh7shWWg3Q',
	authDomain: 'food-net-auth.firebaseapp.com',
	databaseURL:
		'https://food-net-auth-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'food-net-auth',
	storageBucket: 'food-net-auth.appspot.com',
	messagingSenderId: '372093497024',
	appId: '1:372093497024:web:fbccdbf9c452ea59278725',
};

const app = firebase.initializeApp(firebaseConfig);
// Get a reference to the storage service, export it for use
export const storage = firebase.storage();
export default app;
