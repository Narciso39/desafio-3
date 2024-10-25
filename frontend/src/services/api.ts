import axios from 'axios';

const api = axios.create({
  baseURL: "http://127.0.0.1:3000",
});

// Interceptor para tratar erros
api.interceptors.response.use(
  response => response,
  error => {
    // Você pode personalizar o tratamento de erro aqui
    console.error('API error:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;
