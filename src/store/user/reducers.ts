import { IUserState } from '../../core/interfaces/user/user.interface';
import { UserActions } from './types';

const initialState: IUserState = {
  user: {
    name: '',
  },
};

export const userReducer = (state: IUserState = initialState, action: any) => {
  switch (action.type) {
    case UserActions.SET_USER:
    case UserActions.SET_USER_ASYNC:
      return {
        user: action.user,
      };

    default:
      return state;
  }
};
