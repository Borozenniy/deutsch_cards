import { auth, googleProvider } from "../../config/firebase";
import {
   createUserWithEmailAndPassword,
   signInWithPopup,
   signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Profile from "./Profile/Profile";

export const Auth = () => {
   // const [user, setUser] = useState();
   //Get Email/Password
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   // For Classic Email
   //console.log(auth?.currentUser?.email);

   /*
   useEffect(() => {
      auth.currentUser ? setUser(true) : setUser(false);
   }, []);
   */

   const signIn = async () => {
      try {
         await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
         console.error(err);
      }
   };

   const signInWithGoogle = async () => {
      try {
         await signInWithPopup(auth, googleProvider);
      } catch (err) {
         console.error(err);
      }
   };

   const logout = async () => {
      try {
         await signOut(auth);
      } catch (err) {
         console.error(err);
      }
   };

   return (
      <div>
         {auth.currentUser ? (
            <Profile user={auth.currentUser} logout={logout} />
         ) : (
            <div>
               <button onClick={signInWithGoogle}>Sign In With Google</button>
            </div>
         )}
      </div>
   );
};

/*
 <h2>Email / Password</h2>
               <input
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
               />
               <button onClick={signIn}>Sign In</button>
*/
