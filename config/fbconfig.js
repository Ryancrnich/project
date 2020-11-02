import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var fbconfig = {
    apiKey: "AIzaSyAPtbNtucGwrNkXNRBNaJI0QdGQcMSXt_A",
    authDomain: "m3-studios.firebaseapp.com",
    databaseURL: "https://m3-studios.firebaseio.com",
    projectId: "m3-studios",
    storageBucket: "m3-studios.appspot.com",
    messagingSenderId: "153200372479",
    appId: "1:153200372479:web:940ad6836676dbbe"
  };
  // Initialize Firebase
  firebase.initializeApp(fbconfig);
  firebase.firestore();
  export default firebase;