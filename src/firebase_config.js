import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDMP7PUBAscvtAsp6rEotkzUc4WqGIxnxc",
  authDomain: "to-do-list-12ddf.firebaseapp.com",
  projectId: "to-do-list-12ddf",
  storageBucket: "to-do-list-12ddf.appspot.com",
  messagingSenderId: "263312893491",
  appId: "1:263312893491:web:8ade67522d497dccc3e546",
  measurementId: "G-XQVMHEYE6H"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
