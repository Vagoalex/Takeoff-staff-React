import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthState, IUsers } from './types';
import { IUser } from 'types/IUser';
import users from './usersState';
import { useHttp } from 'hooks/http.hook';

const initialState: AuthState = {
  isAuth: false,
  authUser: null,
  users,
};

// export const fetchHeroes = createAsyncThunk('auth/fetchAuth', async () => {
//   const { request } = useHttp();
//   return await request('http://localhost:3001/heroes');
// });

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setAuthUser(state, action: PayloadAction<string | null>) {
      state.authUser = action.payload;
    },
    addNewUser(state, action: PayloadAction<IUsers>) {
      state.users.push(action.payload);
    },
  },
});

export const { setIsAuth, setAuthUser, addNewUser } = authSlice.actions;
export default authSlice.reducer;
