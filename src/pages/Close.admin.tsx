// import { Link } from "react-router-dom";
// import Orange from "../components/Card/cloer/Orange";
// import TrainingCard from "../components/Card/TrainingCard";

// function Close () {
//   return (
//     <div>
//       <Orange title=" ปิดกิจกรรม " />
//       <Link to="close-form">
//         <TrainingCard
//           buttonText="ปิด"
//           buttonColor="bg-gray-800"
//           buttonHover="hover:bg-gray-400"
//         />
//       </Link>
//     </div>
//   );
// }
// export default Close;

import { useNavigate } from "react-router-dom";
import TrainingCard from "../components/Card/TrainingCard";
import Orange from "../components/Card/cloer/Orange";

function Close() {
  const navigate = useNavigate();

  const handleGoToForm = () => {
    navigate("/close-form"); // เปลี่ยน path ตรงนี้ตามที่ต้องการ
  };

  return (
    <div>
      <Orange title=" ปิดกิจกรรม " />
      <TrainingCard
        buttonText="ปิด"
        buttonColor="bg-gray-800"
        buttonHover="hover:bg-gray-400"
        onClick={handleGoToForm} // ✅ นำทางด้วยฟังก์ชันนี้
      />
    </div>
  );
}

export default Close;