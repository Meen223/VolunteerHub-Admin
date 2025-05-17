import React, { useState, useEffect } from 'react'
import { type Activity } from '../types'
import DetailsCard from '../components/Card/cloer/DetailsCard'
import Baradmin from '../components/Card/cloer/Baradmin'
import Pagination from '../components/Card/Pagination'

const HomepageAdmin: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([])
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)        // state หน้า
  const [totalPages, setTotalPages] = useState(1) // รวมหน้า (จาก backend)

  useEffect(() => {
    fetch(`http://localhost:3001/activity/get?page=${page}`)
      .then(res => {
        if (!res.ok) throw new Error('Fail to fetch activities')
        return res.json() as Promise<{
          total: number
          page: number
          limit: number
          data: Activity[]
        }>
      })
      .then(payload => {
        setActivities(payload.data)
        const totalPagesCalc = Math.ceil(payload.total / payload.limit)
        setTotalPages(totalPagesCalc)
      })
      .catch(err => setError(err.message))
  }, [page])  // เพิ่ม page เป็น dependency เพื่อ fetch ใหม่เมื่อเปลี่ยนหน้า

  return (
    <div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Baradmin />
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
  )
}

export default HomepageAdmin
