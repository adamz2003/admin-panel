import axios from "axios";
import { getSession } from "next-auth/react";

const apiClient = axios.create({
  baseURL: process.env.BACKEND_URL || "http://localhost:8000",
  headers: {
    "Content-type": "application/json",
  },
});
apiClient.interceptors.request.use(async (request:any) => {
  const session:any = await getSession();
    if (session) {
      request.headers = {
        "Authorization": `Bearer ${session.user?.token}`,
      };
    }
  `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`;
  return request;
});
export const apiLogin = axios.create({
  baseURL: process.env.BACKEND_URL || 'http://localhost:8000',
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
