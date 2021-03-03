import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBCOF9LbnCfq09qB2pCzp0nJwxPhsRVGyI",
    authDomain: "slack-clone-63a7c.firebaseapp.com",
    projectId: "slack-clone-63a7c",
    storageBucket: "slack-clone-63a7c.appspot.com",
    messagingSenderId: "661961624792",
    appId: "1:661961624792:web:816c616ef837f27b0ddbad",
    measurementId: "G-4KHWSRX4B2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;