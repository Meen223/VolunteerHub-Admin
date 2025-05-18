import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TrainingCard from "../components/Card/TrainingCard";
import { type Activity } from "../types";

function Apporove() {
    const [pendingActivities, setPendingActivities] = useState<Activity[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("http://localhost:3002/activity/get?status=pending")
            .then((res) => {
                if (!res.ok) throw new Error("ไม่สามารถโหลดกิจกรรมได้");
                return res.json();
            })
            .then((data) => {
                setPendingActivities(data.data); // กิจกรรม pending
            })
            .catch((err) => {
                setError(err.message);
            });
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">กิจกรรมที่รออนุมัติ</h1>
            {error && <p className="text-red-500">{error}</p>}
            {pendingActivities.length === 0 && (
                <p className="text-gray-600">ไม่มีรายการกิจกรรมที่รออนุมัติ</p>
            )}
            {pendingActivities.map((act) => (
                <Link key={act.id} to={`/approve-form?id=${act.id}`}>
                    <TrainingCard
                        activity={act}
                        buttonText="รายละเอียด"
                        buttonColor="bg-green-600"
                        buttonHover="hover:bg-green-900"
                    />
                </Link>
            ))}
        </div>
    );
}

export default Apporove;
