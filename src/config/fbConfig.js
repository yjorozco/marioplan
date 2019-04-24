import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyCb9xviJbD_BA3AoY9jRo7kpKiqn4Eh6G8",
    authDomain: "net-ninja-marioplan-b2cd7.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-b2cd7.firebaseio.com",
    projectId: "net-ninja-marioplan-b2cd7",
    storageBucket: "net-ninja-marioplan-b2cd7.appspot.com",
    messagingSenderId: "698496278061"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true})


  export default firebase;