import { IUserState } from '../../core/interfaces/user/user.interface';

const getInitial = (state: any): IUserState => state.user;

export const selectUser = (state: any) => getInitial(state).user;
export const selectUsername = (state: any) => getInitial(state).user.name;
