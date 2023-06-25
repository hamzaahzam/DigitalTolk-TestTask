import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
//Reducers
import taskReducer from './slices/taskSlice';
import checkinReducer from './slices/checkinSlice';

const reducers = combineReducers({
    taskReducer,
    checkinReducer,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: false,
    middleware: [thunk],
});

export default store;