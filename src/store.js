import dataReducer from './dataSlice';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
    reducer: {
        data: dataReducer,
    }
});

export default store;