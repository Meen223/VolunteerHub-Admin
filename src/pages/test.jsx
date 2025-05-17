import { useState } from "react";
import Baradmin from "../components/Card/cloer/Baradmin";
import Pink from "../components/Card/cloer/Pink";
import Pagination from "../components/Card/Pagination";

const HomepageAdmin = () => {
  const [statusFilter, setStatusFilter] = useState("");

  const activities = [
    { id: 1, name: "กิจกรรม A", status: "อนุมัติ" },
    { id: 2, name: "กิจกรรม B", status: "ปฏิเสธ" },
    { id: 3, name: "กิจกรรม C", status: "อนุมัติ" },
    { id: 4, name: "กิจกรรม D", status: "ปฏิเสธ" },
    { id: 5, name: "กิจกรรม E", status: "อนุมัติ" },
  ];

  const filteredActivities = statusFilter
    ? activities.filter((act) => act.status === statusFilter)
    : activities;

  return (
    <div>
      <Baradmin onStatusFilter={setStatusFilter} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredActivities.map((act) => (
          <Pink key={act.id} name={act.name} status={act.status} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Pagination />
      </div>
    </div>
  );
};



///////////1/////////
export default HomepageAdmin;

import { useState } from "react";
import Baradmin from "../components/Card/cloer/Baradmin";
import Pink from "../components/Card/cloer/Pink";
import Pagination from "../components/Card/Pagination";

const HomepageAdmin = () => {
  const [statusFilter, setStatusFilter] = useState("");

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    console.log("Selected status:", status); // ✅ ตรงนี้จะเห็นค่าที่เปลี่ยน
  };

  return (
    <div>
      <Baradmin onStatusFilter={handleStatusFilter} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 🔁 สมมุติคุณมีข้อมูลเป็น array ควร filter ด้วย statusFilter ตรงนี้ */}
        <Pink status="อนุมัติ" />
        <Pink status="ปฏิเสธ" />
        <Pink status="อนุมัติ" />
        <Pink status="อนุมัติ" />
        <Pink status="ปฏิเสธ" />
      </div>

      {/* Pagination แยกมาไว้ข้างนอก grid */}
      <div className="flex justify-center mt-8">
        <Pagination />
      </div>
    </div>
  );
};

export default HomepageAdmin;
