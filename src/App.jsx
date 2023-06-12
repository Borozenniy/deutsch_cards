import Header from "./components/Header/Header";
import "./App.css";
import { useEffect, useState } from "react";
import { db } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";
import Body from "./components/Body/Body";

function App() {
   /*
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
            console.log(filteredData);
            setDeutschList(filteredData);
         } catch (err) {
            console.error(err);
         }
      };
      getDeutschList();
   }, []);
   console.log(deutschList);
 */

   return (
      <>
         <Header />
         <Body />
      </>
   );
}

export default App;
