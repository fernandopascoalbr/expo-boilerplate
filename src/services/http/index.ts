import { API_URL } from '@/src/config/constants/Env';
import axios from 'axios';

export const api = axios.create({
  baseURL: API_URL
});
