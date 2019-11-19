import { IUser } from '../../core/interfaces/user/user.interface';
import { UserActions } from './types';

export const setUser = (user: IUser) => ({
  type: UserActions.SET_USER,
  user,
});

export const getUser = () => ({
  type: UserActions.GET_USER,
});

export const loginUser = () => ({
  type: UserActions.LOGIN_REQUEST,
});
