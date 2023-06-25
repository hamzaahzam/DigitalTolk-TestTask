import { deleteRequest, getRequest, postRequest } from '..';

export const getAllCheckinsApi = () => getRequest(`/checkins`);

export const createCheckinApi = payload => postRequest(`/checkins`, payload);

export const deleteCheckinApi = id => deleteRequest(`/checkins/${id}`);

