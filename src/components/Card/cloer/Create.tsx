function Create (){
    return(
        <button className="ml-auto flex items-center space-x-1 border border-gray-300 rounded-md px-3 py-1 m-2 hover:bg-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          <span>สร้างกิจกรรม</span>
        </button>
        
    );
};

export default Create ;