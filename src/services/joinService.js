import axios from "axios";

// const API_URL = "http://localhost:5000/api/join";
const API_URL = `${import.meta.env.VITE_API_URL}/api/join`;

export const addNewJoin = async (formData) => {
  console.log("Ready to send formdata to backend ", formData);
  const response = await axios.post(`${API_URL}`, formData, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};
