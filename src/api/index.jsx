import axios from 'axios';
export const BASE_URL = "http://127.0.0.1:8000";
// Set konfigurasi dasar Axios
const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// Tambahkan interceptor untuk menyisipkan token
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken'); // Ambil token dari localStorage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Tambahkan header Authorization
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

api.interceptors.response.use(
    (response) => response, // Jika respons sukses, langsung kembalikan
    (error) => {
        if (error.response.status === 401) {
            // Jika token tidak valid atau expired, redirect ke halaman login
            localStorage.removeItem('authToken'); // Hapus token
            window.location.href = '/login'; // Redirect ke login
        }
        return Promise.reject(error);
    }
);
export const getPhoto = (photo) => {
    return `${BASE_URL}/storage/${photo}`;
};
export default api;