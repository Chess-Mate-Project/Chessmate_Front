import { Chess } from "~/assets";
import styles from "./style.module.css";
import { generateCodeVerifier, generateCodeChallenge } from "~/Auth/pkce";

const CLIENT_ID = import.meta.env.VITE_LICHESS_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_LICHESS_REDIRECT_URI;

const Login = () => {
  const handleLogin = async () => {
    const code_verifier = generateCodeVerifier();
    const code_challenge = await generateCodeChallenge(code_verifier);

    sessionStorage.setItem("code_verifier", code_verifier);

    const loginUrl =
      `https://lichess.org/oauth?` +
      `response_type=code&` +
      `client_id=${CLIENT_ID}&` +
      `redirect_uri=${encodeURIComponent(REDIRECT_URI)}&` +
      `code_challenge_method=S256&` +
      `code_challenge=${code_challenge}`;

    window.location.href = loginUrl;
  };

  return (
    <div className={styles.chessLoginCt}>
      <img className={styles.chessImg} src={Chess} alt="chessImg" />
      <button onClick={handleLogin} className={styles.chessLoginBtn}>
        로그인
      </button>
    </div>
  );
};

export default Login;
