import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import data from '../features/slices/moviesSlice'

export const store = configureStore({
    reducer: {
        data,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
