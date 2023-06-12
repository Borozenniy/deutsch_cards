import { useNavigate } from "react-router-dom";
const ButtonBack = () => {
   const navigate = useNavigate();
   return <button onClick={() => navigate(-1)}>Zuruck</button>;
};

export default ButtonBack;
