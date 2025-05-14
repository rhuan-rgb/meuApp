import axios from "axios";
import * as SecureStore from "expo-secure-store";

const api = axios.create({
  baseURL: "http://10.89.240.90:5000/api/v1/",
  headers: {
    accept: "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = await SecureStore.getItemAsync("token");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const sheets = {
  postLogin: (user) => api.post("login", user),
  postCadastro: (user) => api.post("user", user),
  postOrganizador: (user) => api.post("organizador", user),
  postEvento: (user) => api.post("evento", user),
  postIngresso: (user) => api.post("ingresso", user),
  getEventos: () => api.get("evento"),
  getIngressosPorEvento: (idEvento) => api.get("ingresso/evento/" + idEvento),
  createIngresso: (dados) => api.post("/ingresso", dados),
};

export default sheets;
