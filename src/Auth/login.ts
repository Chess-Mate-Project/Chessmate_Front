import { generateCodeVerifier, generateCodeChallenge } from '~/Auth/pkce';

export async function redirectToLichessLogin() {
  const clientId = import.meta.env.VITE_LICHESS_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_LICHESS_REDIRECT_URI;

  const codeVerifier = generateCodeVerifier();
  const codeChallenge = await generateCodeChallenge(codeVerifier);
  const scope = 'profile:rea emailL:read';

  sessionStorage.setItem('code_verifier', codeVerifier);

  const authUrl = `https://lichess.org/oauth?` +
    `response_type=code&` +
    `client_id=${clientId}&` +
    `redirect_uri=${encodeURIComponent(redirectUri)}&` +
    `code_challenge_method=S256&` +
    `scope=${encodeURIComponent(scope)}&` +
    `code_challenge=${codeChallenge}`;

  window.location.href = authUrl;
}
