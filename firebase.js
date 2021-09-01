import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDbiS9b_PXMToCxMeh-rT3a1p8xiMhfcEs",
  authDomain: "marketplace-b6151.firebaseapp.com",
  projectId: "marketplace-b6151",
  storageBucket: "marketplace-b6151.appspot.com",
  messagingSenderId: "455334727190",
  appId: "1:455334727190:web:39a8e58e90794306faaf37"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;