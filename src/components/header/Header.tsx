import styles from "./Header.module.css";
import ChessLogo from "../../img/chessLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <div className={styles.HeaderFrame}>
            <div className={styles.headerLeft}>
                <div className={styles.chessLogoCt}>
                    <img className={styles.chessLogo} src={ChessLogo} alt="chessLogo" />
                    <div className={styles.logoText}>Chessmate</div>
                </div>
                <div className={styles.linkCt}>
                    <Link className={styles.lanking} to="/">랭킹</Link>
                </div>
            </div>
            {/* <div className={styles.headerRight}>
                <Link className={styles.loginTo} to="/">로그인</Link>
            </div>   */}
            <div className={styles.headerRight}>
                <Link className={styles.myPageTo} to="/">
                    <img src="" alt="" />
                </Link>
                <Link className={styles.logoutTo} to='/'>로그아웃</Link>
            </div>
        </div>
        </>
    )
}

export default Header;