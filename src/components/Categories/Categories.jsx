import { Link } from "react-router-dom";

const Categories = () => {
   return (
      <div className="category">
         <h2> Kategorie </h2>
         <div className="category__list">
            <li>
               <Link to={"/category/verbs/"}>Verbs</Link>
            </li>
            <li>
               <Link to={"/category/nomens/"}>Nomens</Link>
            </li>
         </div>
      </div>
   );
};

export default Categories;
