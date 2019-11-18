import { IUserState } from '../../core/interfaces/user/user.interface';

const getInitial = (state: any): IUserState => state.user;

export const getUser = (state: any) => getInitial(state).user;
