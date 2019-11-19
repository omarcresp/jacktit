import { auth } from 'firebase';
import { call, put } from 'redux-saga/effects';

import { IUser } from '../../core/interfaces/user/user.interface';
import { authProvider, rsf } from '../../firebase';
import { getUser, setUser } from '../../store/user/actions';

export function* loginSaga() {
  yield call(rsf.auth.signInWithPopup, authProvider);

  yield put(getUser());
}

export function* getFirebaseUser() {
  const rawUser = auth().currentUser;

  if (rawUser) {
    const user: IUser = {
      name: rawUser.displayName || '',
    };

    yield put(setUser(user));
  }
}
