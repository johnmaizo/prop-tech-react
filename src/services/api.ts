import axios from "axios";
import { Registration } from "../types/registration";

const API_URL = "https://api.leuteriorealty.com/core-system/v1/public/api/hackathon/participants";

export const fetchRegistrations = async (): Promise<Registration[]> => {
  const response = await axios.get(API_URL);
  return response.data.data || [];
};
