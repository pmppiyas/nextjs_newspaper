import { authReducer } from '@/redux/features/authSlice';
import { newsReducer } from '@/redux/features/newsSlice';
import { authApi } from '@/redux/services/authAppi';
import { newsApi } from '@/redux/services/newsApi';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,

    news: newsReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
