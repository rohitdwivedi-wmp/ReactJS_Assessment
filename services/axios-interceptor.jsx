import axios from 'axios';
import apiUrl from '../utils/apiUrl'

// Create an Axios instance with default settings
const apiClient = axios.create({
    baseURL: apiUrl.postURL
});

// Add a response interceptor for error handling
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error.response || error.message);
        return Promise.reject(error);
    }
);

// API call functions
export const fetchPosts = async () => {
    const response = await apiClient.get('/posts');
    return response.data;
};

export const fetchPostById = async (postId) => {
    const response = await apiClient.get(`/posts/${postId}`);
    return response.data;
};


export default apiClient;
