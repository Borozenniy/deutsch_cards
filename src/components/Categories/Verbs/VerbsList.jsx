import { Link } from "react-router-dom";

const VerbsList = ({ list }) => {
   console.log(list);
   return (
      <div>
         <h3>Verbs</h3>
         <div className="verbs__list">
            {list
               ? list.map((index) => (
                    <Link key={index.id} to={index.id}>
                       {index.name}
                    </Link>
                 ))
               : null}
         </div>
      </div>
   );
};

export default VerbsList;
