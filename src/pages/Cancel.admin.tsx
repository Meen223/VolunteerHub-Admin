import Orange from "../components/Card/cloer/Orange";
import TrainingCard from "../components/Card/TrainingCard";

function Cancel () {
    return (
        <div>
            <Orange title=" ยกเลิกกิจกรรม "/>
            <TrainingCard buttonText="ยกเลิก" buttonColor="bg-red-500" buttonHover="hover:bg-red-800"/>
        </div>
    );
};
export default Cancel;