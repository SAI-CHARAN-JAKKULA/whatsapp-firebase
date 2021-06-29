import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAMgv8qlKdmKDSzZHOjldGGVMtWubsvpcI",
  authDomain: "whatsapp-mern-9c2eb.firebaseapp.com",
  databaseURL: "https://whatsapp-mern-9c2eb.firebaseio.com",
  projectId: "whatsapp-mern-9c2eb",
  storageBucket: "whatsapp-mern-9c2eb.appspot.com",
  messagingSenderId: "701082839172",
  appId: "1:701082839172:web:72ed3c916a4c0a836ebad1"
};
  const firebaseApp = firebase.apps && firebase.apps.length > 0 ? firebase.apps[0] : firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
