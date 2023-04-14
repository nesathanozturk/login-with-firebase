import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuCoX5s0WUwvYvwtIzUU5lG2RoiUIls18",

  authDomain: "login-app-6032e.firebaseapp.com",

  projectId: "login-app-6032e",

  storageBucket: "login-app-6032e.appspot.com",

  messagingSenderId: "1018590560004",

  appId: "1:1018590560004:web:bd3576b3ab4489731a5a51",
};

const app = initializeApp(firebaseConfig); // parametre olarak firebaseConfig'i vermeliyiz. diğer dosyalarda çok kullanmayacağımız için export etmedik.
export const auth = getAuth(app);
