///การ์ดยาว แก้ปุ่ม แก้สี



function TrainingCard({ buttonText = "ยกเลิก", buttonColor = "bg-gray-800", buttonHover = "hover:bg-gray-700" }) {
  return (
    <div className="flex shadow-lg rounded-lg bg-white overflow-hidden mt-4 mx-4">
      <div className="bg-green-300 flex items-center justify-center px-8 py-6 min-w-[100px]">
        <span className="text-2xl font-semibold text-black select-none">อบรม</span>
      </div>
      <div className="flex flex-col flex-grow p-6">
        <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">Lorem Ipsum</h2>
        <p className="text-sm text-gray-700 mb-4">
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        </p>
        <div className="flex justify-between items-center">
          <p className="text-red-600 font-medium">วันที่เริ่มต้น - วันที่สิ้นสุด</p>
          <button
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