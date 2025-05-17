import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",       // เปลี่ยนเป็น URL ของ Backend คุณ
  headers: { "Content-Type": "application/json" },
});

export default api;
