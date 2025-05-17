import { useNavigate } from "react-router-dom";
import Orange from "../components/Card/cloer/Orange";
import TrainingCard from "../components/Card/TrainingCard";

function Close() {
  const navigate = useNavigate();

  return (
    <div>
      <Orange title=" ปิดกิจกรรม " />
      <TrainingCard
        buttonText="ปิดกิจกรรม"
        buttonColor="bg-gray-800"
        buttonHover="hover:bg-gray-400"
        onClick={() => navigate("/close-form")} // ✅ ส่งฟังก์ชันเข้าไป
      />
    </div>
  );
}

export default Close;
