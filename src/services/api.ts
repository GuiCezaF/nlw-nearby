import axios from "axios"

export const api = axios.create({
  baseURL: 'http://your-url:3000',
  timeout: 700,
})