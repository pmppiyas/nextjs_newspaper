import { IRole, IStatus } from '@/types/auth';

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

export interface IRequest {
  id: string;
  status: IStatus;
  role: IRole;
  userId: string;
  user: IUser;
  createdAt: Date;
}
