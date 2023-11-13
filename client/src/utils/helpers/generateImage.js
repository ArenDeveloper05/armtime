import { APIUrl } from "../../api/api";

export const generateImage = (url) => {
  return `${APIUrl}/storage${url}`;
};
