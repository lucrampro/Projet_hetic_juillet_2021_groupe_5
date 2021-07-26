import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDj_fBmy99zynLgvDkL9SMrRCn40HuGfRc",
  authDomain: "secuhome-5962a.firebaseapp.com",
  projectId: "secuhome-5962a",
  storageBucket: "secuhome-5962a.appspot.com",
  messagingSenderId: "718562154776",
  appId: "1:718562154776:web:3be7d581ddccb5f437666d"
};

let db;

if (!firebase.apps.length) {
  const app = firebase.initializeApp(firebaseConfig);
  db = firebase.firestore(app);
}

export { firebase, db };