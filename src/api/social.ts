const REDIRECT_URI = "http://localhost:3000/callback";
const AUTH_URL = `https://lichess.org/oauth/authorize`;

export const getLichessAuthURL = (clientId: string) => {
  const params = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    redirect_uri: REDIRECT_URI,
    scope: "preference:read",
  });
  return `${AUTH_URL}?${params.toString()}`;
};
