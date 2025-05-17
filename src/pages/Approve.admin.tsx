
import { Link } from "react-router-dom";
import TrainingCard from "../components/Card/TrainingCard";

function Apporove () {
    return (
        <div className="from-orange-500  to-blue-400 min-h-screen" >
            <Link to ="approve-form" >
                <TrainingCard buttonText="รายละเอียด" buttonColor="bg-green-600" buttonHover="hover:bg-green-900"/>
            
            </Link>
   
            
        </div>
    );
};
export default Apporove ;