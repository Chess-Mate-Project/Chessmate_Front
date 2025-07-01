import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useLogin = async (code: string) => {
  const CLIENT_ID = "너의_클라이언트_ID";
  const CLIENT_SECRET = "너의_클라이언트_SECRET";
  const REDIRECT_URI = "http://localhost:3000/callback";

  const tokenRes = await axios.post(
    "https://lichess.org/api/token",
    new URLSearchParams({
      grant_type: "authorization_code",
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
    }),
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }
  );

  const accessToken = tokenRes.data.access_token;
  const userRes = await axios.get("https://lichess.org/api/account", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return userRes.data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: useLogin,
  });
};
