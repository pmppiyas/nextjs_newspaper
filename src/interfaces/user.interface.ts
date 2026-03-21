import { IRole } from '@/types/auth';

export interface IUserInfo {
  id: string;
  role: string;
  email: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  picture: string;
  createdAt: string;
  role: IRole;
}
