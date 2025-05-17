
function NavbarLogin ()  {
  return (
    <nav className="bg-blue-500  border-sky-500 dark:bg-gray-900 p-8 " >
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl font-bold " >❀ VolunteerHub</div>
          <ul className="hidden md:flex space-x-4 " >
              <li><a href="/" className="text-white " >หน้าหลัก</a></li>
              <li><a href="#" className="text-white " >กิจกรรมของฉัน</a></li>
              <li><a href="#" className="text-white " >ประวัติกิจกรรม</a></li>
              <li><a href="#" className="text-white " >ระเบียนนิสิต</a></li>
          </ul>
          <div className="border-2 border-white  rounded-2xl   px-8 py-1.5 ">
              <a className="text-white " >Login</a>
          </div>

        </div>
    </nav>
  );
};

export default NavbarLogin;