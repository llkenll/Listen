const REDIRECT_URL = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"
const scopes = ["user-library-read","playlist-read-private"];
const clientId = "0cb45e573f8a450780d834e1f8d3a5fa";

export const loginEndpoint = `${AUTH_ENDPOINT}client_id=${clientId}&redirect_uri=${REDIRECT_URL}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
  