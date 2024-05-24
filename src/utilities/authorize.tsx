import axios from "axios";

export default async function authorize(
  param: string,
  email: string,
  password: string,
  name?: string
) {
  const data = name ? { email, password, name } : { email, password };

  const config = { headers: { "Content-Type": "application/json" } };
  const response = await axios.post(`https://eventsback.onrender.com/${param}`, data, config);
  return response.data;
}
