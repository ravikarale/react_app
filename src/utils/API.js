import axios from "axios";
import { SERVICE_URL } from "./Constants";

const headerConfig = {
  "Content-Type": "application/json"
};

const URL = SERVICE_URL;

export const signUp = async signupData => {
  return await axios.post(`/sign_up`, signupData, headerConfig);
};

export const login = async loginData => {
  return await axios.post(`${URL}/sign_in`, loginData);
};

export const logout = async () => {
};

export const post = async (data, basePath) => {
  return await axios.post(`/${basePath}`, data, headerConfig);
};

export const put = async (data, basePath) => {
  return await axios.put(`/${basePath}`, data, headerConfig);
};

export const get = async (basePath, data) => {
  return await axios.get(`/${basePath}`, { params: data ? data : {} });
};

export const del = async basePath => {
  return await axios.delete(`/${basePath}`, {}, headerConfig);
};
