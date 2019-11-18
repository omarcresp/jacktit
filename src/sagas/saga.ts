import { delay, put, takeEvery } from 'redux-saga/effects';

import { UserActions } from '../store/user/types';

function* SetUserAsync(action: any) {
  yield delay(4000);

  console.log(action);

  yield put({
    type: UserActions.SET_USER_ASYNC,
  });
}

export function* watchUser() {
  yield takeEvery(UserActions.SET_USER, SetUserAsync);
}
