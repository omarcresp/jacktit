import { takeEvery } from 'redux-saga/effects';
import { UserActions } from '../../store/user/types';
import { getFirebaseUser, loginSaga } from './user-auth.saga';

export const userSagas = [
  takeEvery(UserActions.LOGIN_REQUEST, loginSaga),
  takeEvery(UserActions.GET_USER, getFirebaseUser),
];
