import React from 'react';
import { Link } from 'react-router-dom';
import { type Activity } from '../../../types';

function getStatusLabel(status: string) {
  switch (status) {
    case "pending":
      return "รอดำเนินการ";
    case "approved":
      return "อนุมัติแล้ว";
    case "completed":
      return "เสร็จสิ้น";
    case "rejected":
      return "ไม่อนุมัติ";
    case "cancelled":
      return "ยกเลิก";
    case "draft":
      return "ฉบับร่าง";
    default:
      return "-";
  }
}

export interface DetailsCardProps {
  activity: Activity;
}

const DetailsCard: React.FC<DetailsCardProps> = ({ activity }) => {
  return (
    <div className="border rounded-lg shadow bg-blue-100 hover:bg-blue-200 transition-all">
      {/* Header: ซ้าย=ประเภทกิจกรรม ขว=สถานะ */}
      <div className="flex justify-between items-center px-4 py-1">
        <span className="bg-blue-200 px-3 py-1 rounded-full text-xs font-bold text-blue-700">
  {activity.activity_type_name}
</span>
        <span className="text-sm font-semibold text-blue-700">
          {getStatusLabel(activity.status)}
        </span>
      </div>

      <div className="px-6 py-4 bg-white rounded-b-lg">
        <h3 className="font-bold text-lg border-b border-gray-300 pb-1 mb-3 text-blue-900">
          {activity.title}
        </h3>
        <p className="text-sm text-gray-700 mb-3">
          {activity.description}
        </p>
        <p className="text-xs text-gray-600 mb-1">
          {new Date(activity.start_datetime).toLocaleString()} –{' '}
          {new Date(activity.end_datetime).toLocaleString()}
        </p>
        <p className="text-xs text-gray-600 mb-2">
          Maximum: {activity.max_participants} คน
        </p>
        <div className="px-6 py-4 text-right">
          <Link to={`/activity-details/${activity.id}`}>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-800 transition">
              รายละเอียด
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DetailsCard;
