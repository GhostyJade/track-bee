import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

import issuesSlice from 'main/app/issues/store/issuesSlice';

export const store = configureStore({
    reducer: {
        users: userSlice,
        issues: issuesSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
