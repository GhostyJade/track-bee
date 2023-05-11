import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getIssues = createAsyncThunk('issues/getIssues', async () => {
    const response = await axios.get('/issues');
    const data = await response.data;
    return data?.issues || [];
});

const issuesStore = createSlice({
    name: 'issues',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getIssues.fulfilled, (state, action) => action.payload);
    },
});

export const selectIssues = (state: any) => state.issues;

export default issuesStore.reducer;
