import { createContext } from "react";
import { useEffect, useState } from "react";
import { db } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";

export const Context = createContext();

export const Data = ({ children }) => {
   const [deutschList, setDeutschList] = useState();
   const deutschCollection = collection(db, "verbs");

   useEffect(() => {
      const getDeutschList = async () => {
         // READ THE DATA
         // SET THE DEUTSCH LIST
         try {
            const data = await getDocs(deutschCollection);
            const filteredData = data.docs.map((doc) => ({
               ...doc.data(),
               id: doc.id,
            }));
            setDeutschList(filteredData);
         } catch (err) {
            console.error(err);
         }
      };
      getDeutschList();
   }, []);
   return <Context.Provider value={deutschList}>{children}</Context.Provider>;
};
