import { combineReducers } from 'redux'
import { authSlice } from './reducers/auth';
import { configureStore } from '@reduxjs/toolkit'


const reducers = combineReducers({
  auth: authSlice.reducer,
})

// export default configureStore({ reducer: reducers, middleware:[] });
export default configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
export type IRootState = ReturnType<typeof reducers>;
