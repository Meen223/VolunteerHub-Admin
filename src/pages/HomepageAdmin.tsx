import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ นำเข้า useNavigate
import Baradmin from "../components/Card/cloer/Baradmin";
import DetailsCard from "../components/Card/cloer/DetailsCard";
import Pagination from "../components/Card/Pagination";

const HomepageAdmin = () => {
  const [filters, setFilters] = useState({ status: "", type: "" });
  const navigate = useNavigate(); // ✅ ใช้งาน navigate

  const activities = [
    { id: 1, name: "กิจกรรม A", status: "อนุมัติ", type: "อาสา" },
    { id: 2, name: "กิจกรรม B", status: "ปฏิเสธ", type: "อบรม" },
    { id: 3, name: "กิจกรรม C", status: "อนุมัติ", type: "ช่วยงาน" },
    { id: 4, name: "กิจกรรม D", status: "ปฏิเสธ", type: "อาสา" },
    { id: 5, name: "กิจกรรม E", status: "อนุมัติ", type: "อบรม" },
  ];

  const filteredActivities = activities.filter((act) => {
    const matchStatus = filters.status ? act.status === filters.status : true;
    const matchType = filters.type ? act.type === filters.type : true;
    return matchStatus && matchType;
  });

  return (
    <div>
      <Baradmin onFilterChange={setFilters} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredActivities.map((activity) => (
          <DetailsCard
            key={activity.id}
            name={activity.name}
            status={activity.status}
            type={activity.type}
            onClick={() => navigate("/activity-details")} // ✅ กดแล้วไปหน้า details
          />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Pagination />
      </div>
    </div>
  );
};

export default HomepageAdmin;
