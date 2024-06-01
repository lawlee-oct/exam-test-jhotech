import { createAsyncThunk } from '@reduxjs/toolkit';

import AUTH_API from './auth.api';
import { LOCAL_STORAGE_KEY } from 'src/constants';
import { notification } from 'antd';
import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { auth, providerFacebook, providerGoggle } from 'src/configs/firebase/firebase';

export const loginAction = createAsyncThunk<any, Auth.LoginRequestPayload>(
  'auth',
  async ({ data, callback = () => {} }, { dispatch, rejectWithValue }) => {
    try {
      const user: any = await AUTH_API.loginAPI(data);

      if (user?.access_token) {
        localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN, user.access_token);

        callback();
      }

      notification.success({ message: user?.message });

      return user;
    } catch (err: any) {
      notification.error({ message: err?.message ? err?.message : 'Login Failed!' });

      rejectWithValue(err?.response?.data || err?.name);
    }
  },
);

export const loginWithFacebookAction = createAsyncThunk<any, any>(
  'auth_with_facebook',
  async ({ callback = () => {} }, { dispatch, rejectWithValue }) => {
    try {
      const result = await signInWithPopup(auth, providerFacebook);
      const token = await result.user.getIdToken();

      if (token) {
        localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN, token);

        callback();

        notification.success({ message: 'Login Success!' });
      }

      return result.user;
    } catch (err: any) {
      notification.error({ message: err?.message });

      rejectWithValue(err?.response?.data || err?.name);
    }
  },
);

export const loginWithGoogleAction = createAsyncThunk<any, any>(
  'auth_with_google',
  async ({ callback = () => {} }, { dispatch, rejectWithValue }) => {
    try {
      const result = await signInWithPopup(auth, providerGoggle);
      const token = await result.user.getIdToken();

      if (token) {
        localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN, token);

        callback();

        notification.success({ message: 'Login Success!' });
      }

      return result.user;
    } catch (err: any) {
      notification.error({ message: err?.message });

      rejectWithValue(err?.response?.data || err?.name);
    }
  },
);

export const getMeAction = createAsyncThunk<any>('me', async (_, { dispatch, rejectWithValue }) => {
  try {
    const res = await AUTH_API.getMeAPI();

    return res;
  } catch (err: any) {
    return rejectWithValue(err);
  }
});

export const logoutAction = createAsyncThunk<any, any>(
  'logout',
  async ({ callback = () => {} }, { dispatch, rejectWithValue }) => {
    try {
      const auth = getAuth();
      await signOut(auth);
      localStorage.clear();

      callback();

      return auth;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);
