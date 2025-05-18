import React, { useState, useEffect } from 'react';
import { type Activity } from '../types';
import DetailsCard from '../components/Card/cloer/DetailsCard';
import Baradmin from '../components/Card/cloer/Baradmin';
import Pagination from '../components/Card/Pagination';
import { useTheme } from "../contexts/ThemeContext"; // <- เพิ่มบรรทัดนี้
 
const PAGE_LIMIT = 6;
 
const HomepageAdmin: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({ status: '', type: '', search: '' });
 
  const { theme } = useTheme(); // <- เพิ่มตรงนี้
 
  useEffect(() => {
    let url = `http://localhost:3002/activity/get?page=${page}&limit=${PAGE_LIMIT}`;
    if (filters.status) url += `&status=${filters.status}`;
    if (filters.type) url += `&activity_type_id=${filters.type}`;
    if (filters.search) url += `&search=${encodeURIComponent(filters.search)}`;
 
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Fail to fetch activities');
        return res.json();
      })
      .then(payload => {
        setActivities(payload.data);
        const totalPagesCalc = Math.ceil(payload.total / payload.limit);
        setTotalPages(totalPagesCalc);
      })
      .catch(err => setError(err.message));
  }, [page, filters]);
 
  return (
<div className="min-h-screen bg-gradient-to-t from-rose-200 to-white dark:from-gray-900 dark:to-gray-900 transition-colors">
      {error && <p className="text-red-500 text-sm">{error}</p>}
<Baradmin onFilterChange={setFilters} />
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-3">
        {activities.map(act => (
<DetailsCard key={act.id} activity={act} />
        ))}
</div>
<div className="flex justify-center mt-8">
<Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
</div>
</div>
  );
}
 
export default HomepageAdmin;