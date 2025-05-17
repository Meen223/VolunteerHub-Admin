const Loginpageadmin = () => {
  return (
    <div className="bg-[#e9f2f9] flex items-center justify-center min-h-screen">
      <div className="bg-[#f1f7f9] p-8 rounded-xl max-w-sm w-full shadow-lg relative">
        {/* Close Button */}
        <button aria-label="Close" className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-1">Welcome Back</h2>
        <p className="text-xs text-gray-400 mb-6">Please enter your credentials to login</p>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="text-xs font-semibold mb-1 block">รหัสเมล</label>
            <input
              type="email"
              id="email"
              placeholder="example@email.com"
              className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-400 text-xs placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-xs font-semibold mb-1 block">รหัสผ่าน</label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-900 text-xs placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center text-xs">
            <input type="checkbox" id="keep-signed" className="w-3 h-3 text-green-600 rounded" />
            <label htmlFor="keep-signed" className="ml-2 select-none">Keep me signed in</label>
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm mt-4">
            เข้าสู่ระบบ
          </button>
        </form>

        <hr className="my-4 border-gray-200" />

        <div className="text-xs flex justify-between">
          <span className="text-gray-400">Don't have an account?</span>
          <a href="#" className="text-black font-medium hover:underline">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Loginpageadmin;






