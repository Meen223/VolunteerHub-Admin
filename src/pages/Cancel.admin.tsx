import { useNavigate } from "react-router-dom";
import Orange from "../components/Card/cloer/Orange";
import TrainingCard from "../components/Card/TrainingCard";

function Cancel() {
  const navigate = useNavigate();

  return (
    <div>
      <Orange title="ยกเลิกกิจกรรม" />
      <TrainingCard
        buttonText="ยกเลิก"
        buttonColor="bg-red-500"
        buttonHover="hover:bg-red-800"
        onClick={() => navigate("/cancel-form")}
      />
    </div>
  );
}

export default Cancel;
