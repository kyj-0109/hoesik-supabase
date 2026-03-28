import { supabase } from './supabase'
import { Restaurant } from '@/data/types'

export async function getMaxPeople(): Promise<number> {
  const { data, error } = await supabase
    .from('plans')
    .select('max_people')
    .not('max_people', 'is', null)
    .order('max_people', { ascending: false })
    .limit(1)
    .single()

  if (error || !data) return 50
  return data.max_people ?? 50
}

export async function getRestaurants(): Promise<Restaurant[]> {
  const { data, error } = await supabase
    .from('restaurants')
    .select(`
      id, name, name_jp, address, genre, smoking,
      private_rental, private_rental_note,
      private_room, private_room_note,
      lat, lng, distance_km, walk_minutes,
      plans (
        name, price, lunch, dinner,
        min_people, max_people, duration_hours
      )
    `)
    .order('id')

  if (error) {
    console.error('Supabase fetch error:', error.message)
    throw error
  }

  return (data ?? []) as Restaurant[]
}
