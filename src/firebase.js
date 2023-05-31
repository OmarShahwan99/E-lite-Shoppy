import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyD9JLylGoz8s_wA7MJZI-NDGscL1Ywas6s",
  authDomain: "e-commerce-cb6b8.firebaseapp.com",
  databaseURL: "https://e-commerce-cb6b8-default-rtdb.firebaseio.com",
  projectId: "e-commerce-cb6b8",
  storageBucket: "e-commerce-cb6b8.appspot.com",
  messagingSenderId: "377770393173",
  appId: "1:377770393173:web:c003b3da1783d02356dedc",
};

const firebase = initializeApp(firebaseConfig);

export default firebase;