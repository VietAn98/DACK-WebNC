import * as firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyCFcEpYEa5yUfuOGXx8XUIflRNZN6Mfwmw',
    authDomain: 'dackwebnc.firebaseapp.com',
    databaseURL: 'https://dackwebnc.firebaseio.com',
    projectId: 'dackwebnc',
    storageBucket: 'dackwebnc.appspot.com',
    messagingSenderId: '298015316273',
    appId: '1:298015316273:web:02a9613acba1a2c98d3810',
    measurementId: 'G-RWVE7FZ1F1'
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const f = firebase;
  // Get a reference to the storage service,
  // which is used to create references in your storage bucket
  export const storage = firebase.storage();
  export const realtimedb = firebase.database();
  // Create a storage reference from our storage service
  export const storageRef = storage.ref();
  export const database = firebase.firestore();

  export default firebaseConfig;
