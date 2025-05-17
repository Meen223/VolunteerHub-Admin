import Orange from "../components/Card/cloer/Orange";
import TrainingCard from "../components/Card/TrainingCard";

function Close () {
    return (
        <div>
            <Orange title=" ปิดกิจกรรม "/>
            <TrainingCard buttonText="ปิด" buttonColor="bg-gray-800" buttonHover="hover:bg-gray-400"/>
        </div>
    );
};
export default Close;
