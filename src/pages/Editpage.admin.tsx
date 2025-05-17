import Orange from "../components/Card/cloer/Orange";
import TrainingCard from "../components/Card/TrainingCard";


const Editpage  = () => {
    return(
        <div>
        <Orange title="แก้ไขกิจกรรม" />
        <TrainingCard buttonText="แก้ไข" buttonColor="bg-yellow-400" buttonHover="hover:bg-yellow-800" />
        </div>
        
    );
};

export default Editpage;