import axios from 'axios';

const api = axios.create ({
    baseURL: "https://topicos-backend-json-server-hs8eqqmln-micherlane.vercel.app/"
});

export {api};