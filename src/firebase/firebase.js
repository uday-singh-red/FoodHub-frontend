import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
 apiKey: "AIzaSyAtUYxnFDsCSO8AyRlw99qiYVcHCTe1DrQ",
  authDomain: "my-web-73276.firebaseapp.com",
  projectId: "my-web-73276",
  storageBucket: "my-web-73276.firebasestorage.app",
  messagingSenderId: "979301258468",
  appId: "1:979301258468:web:0a8c9059d7474c84da08f1",
  measurementId: "G-GDYLNQV5TG"

}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()