// api.js

import axios from "axios";

const API_BASE_URL = "https://todo-test.digitaltolk.com/api";
const API_TOKEN = "Zl49StyUu9721TFoRHfDqGmEVikCKNhJayGUgDvK";

// Create a class for API calls
class ApiClient {
    constructor() {
        this.client = axios.create({
            baseURL: API_BASE_URL,
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${API_TOKEN}`,
            },
        });
    }

    async getTasks() {
        const response = await this.client.get("/tasks");
        return response.data.tasks;
    }

    async createTask(payload) {
        const response = await this.client.post("/tasks", payload);
        return response.data;
    }

    async updateTask(id, payload) {
        const response = await this.client.put(`/tasks/${id}`, payload);
        return response.data;
    }
    async getCheckins() {
        const response = await this.client.get("/checkins");
        return response.data.checkins;
    }
}

// Export an instance of the API client class
export default new ApiClient();
