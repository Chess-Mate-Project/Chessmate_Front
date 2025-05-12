import styles from "./Login.module.css"

const Login = () => {
    return (
        <>  
        <div className={styles.loginFrame}>
            <div className={styles.loginForm}>
                <div className={styles.loginTitle}>로그인</div>
                <div className={styles.emailCt}>
                <div className={styles.emailText}>이메일</div>
                <input className={styles.emailInput} type="email" placeholder="이메일을 입력하세요" />
                </div>
                <div className={styles.passwordCt}>
                <div className={styles.passwordText}>비밀번호</div>
                <input className={styles.passwordInput} type="password" placeholder="비밀번호를 입력하세요" />
                </div>
                <button className={styles.loginBtn}>로그인</button>
            </div>
        </div>
        </>
    )
}

export default Login;