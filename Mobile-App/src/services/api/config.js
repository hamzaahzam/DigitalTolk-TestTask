import axios from 'axios';
import Qs from 'qs';


const ROOT_URL = 'https://todo-test.digitaltolk.com';
const ACCESS_TOKEN = 'Zl49StyUu9721TFoRHfDqGmEVikCKNhJayGUgDvK';



const BASE_URL = `${ROOT_URL}/api`;


const client = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

client.interceptors.request.use(
    async (config) => {
        const requestConfig = config;
        requestConfig.headers = {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
        };
        requestConfig.paramsSerializer = (params) => {
            return Qs.stringify(params, {
                arrayFormat: 'brackets',
                encode: false,
            });
        };
        return requestConfig;
    },
    (err) => {
        return Promise.reject(err);
    },
);

export { ROOT_URL, BASE_URL, client };