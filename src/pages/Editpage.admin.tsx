import { useNavigate } from "react-router-dom";
import Orange from "../components/Card/cloer/Orange";
import TrainingCard from "../components/Card/TrainingCard";

const Editpage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Orange title="แก้ไขกิจกรรม" />
      <TrainingCard
        buttonText="แก้ไข"
        buttonColor="bg-yellow-400"
        buttonHover="hover:bg-yellow-800"
        onClick={() => navigate("/edit-activity")} // ✅ เพิ่มตรงนี้
      />
    </div>
  );
};

export default Editpage;
