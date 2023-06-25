import { deleteRequest, getRequest, postRequest, putRequest } from '..';

export const getAllTasksApi = () => getRequest(`/tasks`);

export const deleteTasksApi = (id) => deleteRequest(`/tasks/${id}`);

export const createNewTaskApi = (payload) => postRequest(`/tasks`, payload);

export const updateTaskApi = (payload, id) => putRequest(`/tasks/${id}`, payload);
