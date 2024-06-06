import { useEffect, useState } from "react";
import { auth } from "../init";
import { GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";


const googleProvider = new GoogleAuthProvider();

export const loginGoogle = async () =>{
  const userCredentials = await signInWithPopup(auth, googleProvider);
}

export const logout = async () => {
  signOut(auth);
}

export const loginWithEmail = async (email, password) =>{
    try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log(user);
        return user;
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        throw error;
      }
};

export async function signupWithEmail(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

export const useUser = () => {

  const [user, setUser] = useState(auth?.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged( u => setUser(u));
  }, [])

  return user;
}