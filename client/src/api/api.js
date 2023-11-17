import axios from "axios";

export const APIUrl = "http://127.0.0.1:8000";
const token = "";

const api = axios.create({
  baseURL: APIUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

// GET
export const getWatches = async () => {
  return await api.get(`/api/watches`);
};

export const getSingleWatch = async (id) => {
  return await api.get(`/api/watches/${id}`);
};

export const getBelts = async () => {
  return await api.get(`/api/belts`);
};

export const getSingleBelt = async (id) => {
  return await api.get(`/api/belts/${id}`);
};

export const getSlider = async () => {
  return await api.get(`/api/slider`);
};

//POST

export const sendTelegramData = async (data) => {
  return await api.post(`/api/send-telegram-message`, data);
};
