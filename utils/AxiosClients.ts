import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

axiosClient.interceptors.request.use((config) => {
  const adminToken = localStorage.getItem("adminToken");
  config.headers.Authorization = `Bearer ${adminToken}`;
  return config;
});

// axiosClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     const { response } = error;
//     if (response.status === 401) {
//       localStorage.removeItem("token");
//       // window.location.reload();
//     } else if (response.status === 404) {
//       //Show not found
//     }

//     throw error;
//   }
// );

export default axiosClient;
