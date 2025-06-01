import axios, { AxiosResponse } from "axios"
import { apiUrl } from "../../utils/baseUrl"

export const Calculations = async (city:string, weights:Record<string,number>) => {
  try {
    const res: AxiosResponse = await axios.post(apiUrl + `recommendations/${city}`, {weights},{
        headers:{
            'Content-Type' : 'application/json'
        }
    });

    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
        console.error("Axios Error:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || "Something went wrong");
      }
      console.error("Unexpected Error:", error);
      throw error;
  }
}