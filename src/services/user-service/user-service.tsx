import axios, { AxiosResponse } from "axios";
import { apiUrl } from "../../utils/baseUrl";

export const GetCurrentUser = async (token: string) => {
  try {
    const res: AxiosResponse = await axios.get(apiUrl + "users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Something went wrong");
    }
    console.error("Unexpected Error:", error);
    throw error;
  }
};
