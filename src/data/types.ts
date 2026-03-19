export interface Plan {
  name: string;
  price: number | null;
  lunch: boolean | null;
  dinner: boolean | null;
  min_people: number | null;
  max_people: number | null;
  duration_hours: number | null;
}

export interface Restaurant {
  id: number;
  name: string;
  name_jp: string;
  address: string;
  genre: string[];
  smoking: string;
  private_rental: boolean;
  private_rental_note: string;
  private_room: boolean;
  private_room_note: string;
  plans: Plan[];
  lat: number | null;
  lng: number | null;
  distance_km: number | null;
  walk_minutes: number | null;
}

export interface GenreGroup {
  label: string;
  genres: string[];
}
