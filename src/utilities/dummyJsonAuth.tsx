import axios from "axios";

export default async function dummyJsonAuth() {
  const data = {
    username: "kminchelle",
    password: "0lelplR",
  };
  const config = { headers: { "Content-Type": "application/json" } };
  try {
    const response = await axios.post("https://dummyjson.com/auth/login", data, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function commentstest() {
  try {
    const response = await axios.get("https://dummyjson.com/comments?limit=60");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
