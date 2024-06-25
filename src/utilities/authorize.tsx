import axios from "axios";
const authAPI = import.meta.env.VITE_USER_AUTH_ENDPOINT;
export default async function authorize(
  param: string,
  email: string,
  password: string,
  name?: string
) {
  const data = name ? { email, password, name } : { email, password };
  const config = { headers: { "Content-Type": "application/json" } };
  const response = await axios.post(`${authAPI}/${param}`, data, config);
  return response.data;
}
