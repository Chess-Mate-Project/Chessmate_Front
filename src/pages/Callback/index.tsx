import { useEffect } from 'react';
import styles from './style.module.css';
import axios from 'axios';

const Callback = () => {
  useEffect(() => {
    async function getToken() {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      const codeVerifier = sessionStorage.getItem('code_verifier');

      if (!code || !codeVerifier) return;

      try {
        const response = await axios.post('/api/auth/login', {
          code,
          code_verifier: codeVerifier,
        });
        localStorage.setItem('access_token', response.data.access_token);
      } catch (error) {
        console.error('토큰 교환 실패:', error);
      }
    }
    getToken();
  }, []);

  return (
    <>
      <div className={styles.loadingText}>로그인 중...</div>
    </>
  );
};

export default Callback;
