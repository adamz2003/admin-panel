import apiClient, { apiLogin } from "../utils/axios";
import { ApiClientPostProps, ApiClientProps, Credentials } from "../interface";

const getData = async ({ url }: ApiClientProps) => {
  const response = await apiClient.get(`${url}`);
  return response.data;
};

const login = async (url: ApiClientProps, credentials: Credentials) => {
  const response = await apiLogin.post(`${url}`, credentials);
  return response.data;
};

const postData = async ({ url, data }: ApiClientPostProps) => {
  return await apiClient.post(`${url}`, data);
};

const patchData = async ({ url, data }: ApiClientPostProps) => {
  return await apiClient.patch(`${url}`, data);
};

const deleteData = async ({ url }: ApiClientProps) => {
  return await apiClient.delete(`${url}`);
};
const ApiService = {
  getData,
  login,
  postData,
  patchData,
  deleteData,
};
export default ApiService;
