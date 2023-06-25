import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { createNewTaskApi, deleteTasksApi, getAllTasksApi, updateTaskApi } from '../../services/api/methods/tasks';


export const getAllTasks = createAsyncThunk(
    'tasks/getTaskList',
    async () => {
        try {
            let response = await getAllTasksApi();
            return response.data.tasks;
        } catch(error) {
            console.log("🚀 ~ file: taskSlice.js:18 ~ error:", error);
            throw error.message;
        }
    },
);
export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (payload) => {
        try {
            let response = await deleteTasksApi(payload?.item?.id);
            return response.data.tasks;
        } catch(error) {
            console.log("🚀 ~ file: taskSlice.js:18 ~ error:", error);
            throw error.message;
        }
    },
);
export const createNewTask = createAsyncThunk(
    'tasks/createNewTask',
    async (payload) => {
        try {
            let response = await createNewTaskApi(payload);
            payload.fetchList();
            return response.data.tasks;
        } catch(error) {
            console.log("🚀 ~ file: taskSlice.js:18 ~ error:", error);
            throw error.message;
        }
    },
);
export const updateTaskRequest = createAsyncThunk(
    'tasks/updateTask',
    async (data) => {
        try {
            let response = await updateTaskApi(data?.payload, data?.id);
            data?.fetchList();
            return response.data;
        } catch(error) {
            console.log("🚀 ~ file: taskSlice.js:18 ~ error:", error);
            throw error.message;
        }
    },
);

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        taskList: [],
        loading: false,
        error: '',
    },
    reducers: {
        reset: (state, action) => {
            state.taskList = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllTasks.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getAllTasks.fulfilled, (state, action) => {
            state.loading = false;
            state.taskList = action.payload;
        });
        builder.addCase(getAllTasks.rejected, (state, action) => {
            state.loading = false;
            Alert.alert('', action?.error?.message);
        });
        builder.addCase(deleteTask.pending, (state, action) => {
            let item = action?.meta?.arg?.item;
            let list = state.taskList;
            let itemIndex = list.findIndex(i => i.id == item.id);
            if(itemIndex != -1) {
                list.splice(itemIndex, 1);
            }
            state.taskList = [...list];
            state.loading = true;
        });
        builder.addCase(deleteTask.fulfilled, (state, action) => {
            state.loading = false;
            // state.taskList = action.payload;
        });
        builder.addCase(deleteTask.rejected, (state, action) => {
            state.loading = false;
            Alert.alert('', action?.error?.message);
        });
        builder.addCase(createNewTask.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createNewTask.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(createNewTask.rejected, (state, action) => {
            state.loading = false;
            Alert.alert('', action?.error?.message);
        });
    }
});

export const taskReducer = state => state.taskReducer;
export const { reset } = taskSlice.actions;
export default taskSlice.reducer;