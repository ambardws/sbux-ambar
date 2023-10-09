interface IUser {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmed_password: string;
}

interface RegisterResponse {
  id: number;
  token: string;
  name: string;
  username: string;
  email: string;
  password: string;
  confirmed_password: string;
}

interface ILogin {
  username: string;
  password: string;
}
interface LoginResponse {
  access_token: string;
  users: {
    name: string;
    username: string;
    update_at: any;
    id: number;
    email: string;
    created_at: string;
    user_profile: {
      avatar: string;
      created_at: string;
      user_id: number;
      id: number;
      update_at: string;
    };
  };
}
