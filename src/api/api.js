import axios from "axios";

const APIUrl = "";
const token = "";

const api = axios.create({
  baseURL: APIUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

// GET
export const getWatches = async (limit) => {
  return await api.get(`/news/${limit}`);
};

export const getSingleWatche = async (id) => {
  return await api.get(`/news-by-id/${id}`);
};

export const getBelts = async (limit) => {
  return await api.get(`/news/${limit}`);
};

export const getSingleBelt = async (id) => {
  return await api.get(`/news-by-id/${id}`);
};
