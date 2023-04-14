import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuG4ad6rj67Itan_KiyQozBpPkOQNolxw",
  authDomain: "posts-app-a6238.firebaseapp.com",
  projectId: "posts-app-a6238",
  storageBucket: "posts-app-a6238.appspot.com",
  messagingSenderId: "711195804892",
  appId: "1:711195804892:web:a6ef31365f11b49419a019",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // It provides connection to the firebase auth service.
