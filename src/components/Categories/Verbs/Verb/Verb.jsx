import { useParams } from "react-router-dom";
import Header from "../../../Header/Header";
import Categories from "../../Categories";
import GenerateVerbInfo from "./GenerateVerbInfo";
import { useState, useEffect, useContext } from "react";
import { Context } from "../../../../Context";
import ButtonBack from "../../../Navigate/ButtonBack";

const VerbGenerate = () => {
   const data = useContext(Context);
   const { id } = useParams();
   const [chooseVerb, setChooseVerb] = useState();
   useEffect(() => {
      data !== undefined
         ? data.map((index) => {
              if (index.id === id) {
                 setChooseVerb(index);
                 console.log(chooseVerb);
              } else {
              }
           })
         : null;
   }, [data]);
   return (
      <>
         <Header />
         <Categories />
         <ButtonBack />

         <h3>{id}</h3>
         <GenerateVerbInfo verb={chooseVerb} />
      </>
   );
};

export default VerbGenerate;
