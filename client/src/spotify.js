import axios from "axios";

const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize?"
const clientId = '74d6138fa6b94b328a577432074d3f7c';
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private", "streaming","user-read-playback-state","user-modify-playback-state"];
const RESPONSE_TYPE = "token"



export const loginEndpoint = `${AUTH_ENDPOINT}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;