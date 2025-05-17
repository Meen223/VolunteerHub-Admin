import { Link } from "react-router-dom";

function Navbaradmin() {
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-blue-200">
            <div className="flex items-center space-x-2">
                <span className="font-bold text-lg">VolunteerHub</span>
                <div className="ml-6 space-x-6 font-medium text-gray-700">
                    <Link to="/" className="hover:underline">หน้าหลัก</Link>
                    <Link to="/approve-activity" className="hover:underline">อนุมัติ</Link>
                    <Link to="/edit-activity" className="hover:underline">แก้ไข</Link>
                    <Link to="/cancel-activity" className="hover:underline">ยกเลิก</Link>
                    <Link to="/create-activity" className="hover:underline">สร้างกิจกรรม</Link>
                </div>
            </div>
            
        </nav>
    );
}
export default Navbaradmin;
