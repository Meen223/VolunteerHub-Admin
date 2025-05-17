import React, { useState, useEffect } from 'react'
import { type Activity } from '../types'
import DetailsCard from '../components/Card/cloer/DetailsCard'
import Baradmin from '../components/Card/cloer/Baradmin'
import Pagination from '../components/Card/Pagination'

const HomepageAdmin: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('http://localhost:3001/activity/get')
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
      })
      .catch(err => setError(err.message))
  }, [])

  return ( ///แก้ สี
    <div className='min-h-screen bg-gradient-to-r from-sky-100 via-yellow-50 to-rose-100' >
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Baradmin />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-3">
        {activities.map(act => (
          <DetailsCard key={act.id} activity={act} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Pagination />
      </div>
    </div>
  )
}

export default HomepageAdmin

