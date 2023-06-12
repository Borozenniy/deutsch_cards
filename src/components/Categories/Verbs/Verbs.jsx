import Header from "../../Header/Header";
import React from "react";
import { useEffect, useState, useCallback, useContext } from "react";
import { db } from "../../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import Categories from "../Categories";
import { Context } from "../../../Context";

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
         <div>
            <h3>Verbs</h3>
            <div
               style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "5px",
                  flexDirection: "column",
               }}
            >
               {deutsch
                  ? deutsch.map((index) => (
                       <Link key={index.id} to={index.id}>
                          {index.name}
                       </Link>
                    ))
                  : null}
            </div>
         </div>
      </>
   );
};

export default Verbs;
