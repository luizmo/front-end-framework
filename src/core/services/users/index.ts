import httpClient from "core/htttp-client";
import User from "core/types/user";

const getAllUsers = async (filters?: Object): Promise<User[]> => {
  const users = (await httpClient.get<User[]>('users', {
    params: filters
  })).data;
  return users;
}

const getUser = async (userId: string): Promise<User> => {
  const user = (await httpClient.get<User>(`users/${userId}`)).data;
  return user;
}

export {
  getAllUsers,
  getUser
}