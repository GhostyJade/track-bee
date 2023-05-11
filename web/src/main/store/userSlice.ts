import { createSlice } from '@reduxjs/toolkit';

export interface UserStore {
    role: string | null;
    userUid: string | null;
    name: string | null;
    surname: string | null;
    username: string | null;
}

const initialState: UserStore = {
    role: null,
    name: null,
    surname: null,
    username: null,
    userUid: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export default userSlice.reducer;
