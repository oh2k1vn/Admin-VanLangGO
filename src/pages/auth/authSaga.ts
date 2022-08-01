import { PayloadAction } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { delay, fork, take } from 'redux-saga/effects';
import { auth } from '~/firebaseConfig';
import { authActions, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  // yield console.log('login', payload);
  try {
    const user = signInWithEmailAndPassword(auth, payload.email, payload.email);
    yield console.log(user);
    // localStorage.setItem('access_token', user.user.accessToken);
  } catch (error: any) {
    yield console.log(error);
  }
}
function* handleLogout() {
  yield console.log('logout');
  yield delay(1000);
  localStorage.removeItem('access_token');
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }

    yield take(authActions.logout.type);
    yield fork(handleLogout);
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
