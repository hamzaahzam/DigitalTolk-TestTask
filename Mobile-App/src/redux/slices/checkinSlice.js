import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { getAllCheckinsApi, createCheckinApi, deleteCheckinApi } from '../../services/api/methods/checkins';


export const getAllCheckins = createAsyncThunk(
    'checkins/getcheckins',
    async () => {
        try {
            let response = await getAllCheckinsApi();
            return response.data.checkins;
        } catch(error) {
            console.log("🚀 ~ file: taskSlice.js:18 ~ error:", error);
            throw error.message;
        }
    },
);
export const createCheckIn = createAsyncThunk(
    'checkins/createCheckin',
    async (payload) => {
        try {
            let response = await createCheckinApi(payload);
            payload.fetchList();
            return response.data;
        } catch(error) {
            console.log("🚀 ~ file: taskSlice.js:18 ~ error:", error);
            throw error.message;
        }
    },
);
export const removeCheckin = createAsyncThunk(
    'checkins/removeCheckin',
    async (payload) => {
        try {
            let response = await deleteCheckinApi(payload?.item?.id);
            payload.fetchList();
            return response.data;
        } catch(error) {
            console.log("🚀 ~ file: taskSlice.js:18 ~ error:", error);
            throw error.message;
        }
    },
);

const checkinSlice = createSlice({
    name: 'checkins',
    initialState: {
        checkinList: [],
        loading: false,
        error: '',
        currentLocation: null
    },
    reducers: {
        reset: (state, action) => {
            state.checkinList = [];
        },
    },

    extraReducers: (builder) => {
        builder.addCase(getAllCheckins.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getAllCheckins.fulfilled, (state, action) => {
            state.loading = false;
            let list = action.payload;
            state.currentLocation = list[list.length - 1];
            // list.splice(list.length - 1, 1);
            state.checkinList = list;
        });
        builder.addCase(getAllCheckins.rejected, (state, action) => {
            state.loading = false;
            state.currentLocation = action?.meta?.arg?.item;
            Alert.alert('', action?.error?.message);
        });
        builder.addCase(createCheckIn.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createCheckIn.fulfilled, (state, action) => {
            state.loading = false;
            if(action.payload.code == 201) {
                Alert.alert("", action.payload.message);
            }
        });
        builder.addCase(createCheckIn.rejected, (state, action) => {
            state.loading = false;
            Alert.alert('', action?.error?.message);
        });
        builder.addCase(removeCheckin.pending, (state, action) => {
            let item = action?.meta?.arg?.item;
            let list = state.checkinList;
            let itemIndex = list.findIndex(i => i.id == item.id);
            if(itemIndex != -1) {
                list.splice(itemIndex, 1);
            }
            state.checkinList = [...list];
            state.loading = true;
        });
        builder.addCase(removeCheckin.fulfilled, (state, action) => {
            state.loading = false;
            if(action.payload.code == 201) {
                Alert.alert("", action.payload.message);
            }
        });
        builder.addCase(removeCheckin.rejected, (state, action) => {
            state.loading = false;
            Alert.alert('', action?.error?.message);
        });
    }
});

export const checkinReducer = state => state.checkinReducer;
export const { reset } = checkinSlice.actions;
export default checkinSlice.reducer; 