import Header from "../../Header/Header";
import React from "react";
import { useEffect, useState, useCallback, useContext } from "react";
import { db } from "../../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import Categories from "../Categories";
import { Context } from "../../../Context";
import VerbsList from "./VerbsList";

const Verbs = () => {
   const [deutsch, setDeutsch] = useState();

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
            setDeutsch(filteredData);
         } catch (err) {
            console.error(err);
         }
      };
      getDeutschList();
   }, []);

   return (
      <>
         <Header />
         <Categories />
         <VerbsList list={deutsch} />
      </>
   );
};

export default Verbs;
