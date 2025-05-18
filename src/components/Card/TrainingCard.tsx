
import { type Activity } from "../../types"; // ตรวจสอบ path ให้ตรงกับโปรเจคของคุณ

interface TrainingCardProps {
  activity: Activity;
  buttonText?: string;
  buttonColor?: string;
  buttonHover?: string;
  onClick?: () => void;
}

function TrainingCard({
  activity,
  buttonText = "ยกเลิก",
  buttonColor = "bg-gray-800",
  buttonHover = "hover:bg-gray-700",
  onClick,
}: TrainingCardProps) {
  return (
    <div className="flex shadow-lg rounded-lg bg-white overflow-hidden mt-4 mx-4 h-36"> {/* fix h-36 หรือ h-40 เท่ากันทุกใบ */}
  <div className="bg-green-300 flex items-center justify-center min-w-[110px] w-32 h-full"> {/* min-w กับ w กำหนดให้ตรงกัน */}
    <span className="text-xl font-semibold text-black select-none">
      {activity.activity_type_name || "อบรม"}
    </span>
  </div>
      <div className="flex-1 p-4 flex flex-col justify-center">
        <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">
          {activity.title}
        </h2>
        <p className="text-sm text-gray-700 mb-4">{activity.description}</p>
        <div className="flex justify-between items-center">
          <p className="text-red-600 font-medium">
            {new Date(activity.start_datetime).toLocaleDateString()} -{" "}
            {new Date(activity.end_datetime).toLocaleDateString()}
          </p>
          <button
            onClick={onClick}
            className={`${buttonColor} text-white text-sm rounded-full px-16 py-2 ${buttonHover} focus:outline-none`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrainingCard;
