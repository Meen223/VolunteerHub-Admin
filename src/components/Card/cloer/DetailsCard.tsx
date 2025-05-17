import React from 'react'
import { Link } from 'react-router-dom'
import { type Activity } from '../../../types'

export interface DetailsCardProps {
  activity: Activity
}

const DetailsCard: React.FC<DetailsCardProps> = ({ activity }) => {
  return (
    <div className="border rounded-lg shadow bg-pink-100 hover:bg-pink-200">
      <div className="flex justify-end px-4 py-1 text-sm font-semibold text-pink-700">
        {activity.status }
      </div>
      <div className="px-6 py-4 bg-white rounded-b-lg">
        <h3 className="font-bold text-lg border-b border-gray-300 pb-1 mb-3">
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
          <Link to={`/activity/${activity.id}`}>
            <button className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm hover:bg-pink-800">
              รายละเอียด
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DetailsCard

