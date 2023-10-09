import { API_POST_LOGIN, API_POST_REGISTER } from "@trex/services/api";
import Client from "@trex/services/client";

export const registerUser = async (
  credentials: IUser
): Promise<RegisterResponse> => {
  const result = await Client.post(API_POST_REGISTER, {
    name: credentials.name,
    username: credentials.username,
    email: credentials.email,
    password: credentials.password,
    confirmed_password: credentials.confirmed_password,
  });
  return result.data as RegisterResponse;
};

export const loginUser = async (credential: ILogin): Promise<LoginResponse> => {
  const result = await Client.post(
    API_POST_LOGIN,
    {
      username: credential.username,
      password: credential.password,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return result.data as LoginResponse;
};
