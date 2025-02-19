import { env } from '@/lib/env';
import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
