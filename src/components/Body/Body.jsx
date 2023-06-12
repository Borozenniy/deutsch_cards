import Categories from "../Categories/Categories";

const Body = () => {
   return (
      <div
         className="Body"
         style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
         }}
      >
         <Categories />
      </div>
   );
};

export default Body;
