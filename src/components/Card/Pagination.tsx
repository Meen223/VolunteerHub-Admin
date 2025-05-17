

function Pagination  ()  {
  return (
    <div className="flex items-center space-x-2">
      {/* ปุ่มลูกศรซ้าย */}
      <button className="p-2 rounded-md hover:bg-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* ปุ่มหมายเลข */}
      {[1, 2, 3].map((num) => (
        <button
          key={num}
          className="w-10 h-10 rounded-lg bg-gray-300 text-black font-medium hover:bg-gray-400"
        >
          {num}
        </button>
      ))}

      {/* ปุ่มลูกศรขวา */}
      <button className="p-2 rounded-md hover:bg-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;



