import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GenerateVerbInfo = ({ verb }) => {
   const navigateHome = useNavigate();
   useEffect(() => {
      console.log("check");
   }, []);
   //verb === undefined ? navigateHome("/category/verbs/") : null;
   console.log(verb);
   return (
      <div className="verb">
         <div className="verb__info">
            <p>Presens</p>
            {verb !== undefined
               ? verb.presens.map((index) => <li>{index}</li>)
               : null}
         </div>
         <div className="verb__info">
            <p>Präteritum</p>
            {verb !== undefined
               ? verb.prateritum.map((index) => <li>{index}</li>)
               : null}
         </div>
         <div className="verb__info">
            <p>Perfect</p>
            {verb !== undefined
               ? verb.perfekt.map((index) => <li>{index}</li>)
               : null}
         </div>
      </div>
   );
};

export default GenerateVerbInfo;
