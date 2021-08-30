import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDTN0pNZLZskv9qB32XOoOCi4zaM9wsc38",
  authDomain: "social-media-app-58155.firebaseapp.com",
  projectId: "social-media-app-58155",
  storageBucket: "social-media-app-58155.appspot.com",
  messagingSenderId: "513267290237",
  appId: "1:513267290237:web:5027e92cb31b765d286114",
  measurementId: "G-8XBMTHK8NG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
const storage = firebase.storage();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,db, provider, storage};

