import { IUser } from '../../core/interfaces/user/user.interface';
import { UserActions } from './types';

export const setUser = (user: IUser) => ({
  action: UserActions.SET_USER,
  user,
});
