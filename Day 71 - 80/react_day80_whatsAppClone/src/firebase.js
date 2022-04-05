// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyATABrAcm8JMbNNv6eVabQjLpUMiBC66p4",
    authDomain: "whatsappclone-81160.firebaseapp.com",
    projectId: "whatsappclone-81160",
    storageBucket: "whatsappclone-81160.appspot.com",
    messagingSenderId: "310299839240",
    appId: "1:310299839240:web:65a59842e223ccf55ffabd",
    measurementId: " G-V3CQZ0B619"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;