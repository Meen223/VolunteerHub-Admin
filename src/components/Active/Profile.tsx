function Profile  ()  {
  return (
        <div className="flex items-center bg-blue-200 rounded-xl p-6 shadow-md mb-6">
      <div className="bg-blue-600 rounded-full p-4 flex items-center justify-center mr-6 shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg"className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.348 6.718L12 20l-6.507-2.703a12.083 12.083 0 01.348-6.718L12 14z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 14v7" />
        </svg>
      </div>
      <div className="flex-grow text-black">
        <div id="studentId"className="font-semibold text-lg mb-1">00000000</div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>ชื่อ-สกุล</div>
          <div id="name"className="text-right font-medium">-- รอข้อมูล --</div>

          <div>ชั้นปี</div>
          <div id="year"className="text-right font-medium">-- รอข้อมูล --</div>

          <div>คณะ</div>
          <div id="faculty"className="text-right font-medium">-- รอข้อมูล --</div>

          <div>สาขา</div>
          <div id="major"className="text-right font-medium">-- รอข้อมูล --</div>
        </div>
      </div>
    </div>

  );
};

export default  Profile;  
    
