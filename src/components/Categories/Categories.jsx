import { Link } from "react-router-dom";

const Categories = () => {
   return (
      <div className="category">
         <h2> Kategorie </h2>
         <div className="category__list">
            <Link to={"/verbs/"}>Verbs</Link>
            <Link to={"/pronomen/"}>Pronomen</Link>
         </div>
      </div>
   );
};

export default Categories;

/*
<Link to={"/nomens/"}>Nomens</Link>
*/
