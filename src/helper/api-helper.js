import axios from "axios";

const api = axios.create({
  baseURL: "https://api.waifu.im/",
  timeout: 1000,
});

export async function getTags() {
  try {
    const response = await api.get("tags");
    if (response.status === 200) {
      return response.data.versatile;
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
  }
}
