export interface Activity {
  id: number
  title: string
  description: string
  activity_type_id: number
  start_datetime: string
  end_datetime: string
  location: string
  max_participants: number
  hour_value: number
  creator_id: number
  status: string
  created_at: string
  updated_at: string
}
