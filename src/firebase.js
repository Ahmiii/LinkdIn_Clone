import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLsLmzywHKz5t9X5uXaUWF0TqWSWlfosk",
  authDomain: "linkdin-clone-88273.firebaseapp.com",
  projectId: "linkdin-clone-88273",
  storageBucket: "linkdin-clone-88273.appspot.com",
  messagingSenderId: "1059676303313",
  appId: "1:1059676303313:web:4824132e3369c9c170baf0",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
