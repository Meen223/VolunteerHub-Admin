// ActivityCard.jsx
const ActivityCard = ({ type = "อบรม", title, description, dateRange, onCancel }) => {
  return (
    <div className="flex shadow-lg rounded-lg bg-white overflow-hidden">
      <div className="bg-green-300 flex items-center justify-center px-8 py-6 min-w-[100px]">
        <span className="text-2xl font-semibold text-black select-none">{type}</span>
      </div>
      <div className="flex flex-col flex-grow p-6">
        <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">{title}</h2>
        <p className="text-sm text-gray-700 mb-4">"{description}"</p>
        <div className="flex justify-between items-center">
          <p className="text-red-600 font-medium">{dateRange}</p>
          <button
            onClick={onCancel}
            className="bg-gray-800 text-white text-sm rounded-full px-4 py-2 hover:bg-gray-700 focus:outline-none"
          >
            ยกเลิก
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
