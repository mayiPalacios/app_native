
export interface Iuser  {
    email: string;
    password: string;
  password_confirmation: string;
  username: string;
  name: string;
  lastname: string;
}


interface Iregister {
  id: number;
  name: string;
  follower_number: number | null;
  following_number: number | null;
  created_at: string;
  updated_at: string;
  email: string;
  password: string;
  username: string;
  lastname: string;
  photo_url: string | null;
}

export interface ApiResponse {
  user: Iregister;
  token: string;
}