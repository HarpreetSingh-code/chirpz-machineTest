import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from './types';
import { getChirpzHomeScreenListApi } from '../thunks/appThunk';
import { PostProps } from '../../screens/home/types';

const initialState: AppState = {
    chirpzList: { data: [], pagination: { current: 0, total: 0 } },
};

const appSlice = createSlice({
    name: 'app-slice',
    initialState,
    reducers: {
        addNewPost: (state, action: PayloadAction<PostProps>) => {
            state.chirpzList.data = [action.payload, ...state.chirpzList.data]
        }
    },
    extraReducers: builder => {
        builder.addCase(getChirpzHomeScreenListApi.fulfilled, (state, action: PayloadAction<any>) => {
            state.chirpzList.data = action.payload.pagination.current == 1
                ? action.payload.list
                : [...state.chirpzList.data, ...action.payload.list]
            state.chirpzList.pagination = action.payload.pagination
        })
    }
});

export const {
    addNewPost
} = appSlice.actions;
export default appSlice.reducer;
