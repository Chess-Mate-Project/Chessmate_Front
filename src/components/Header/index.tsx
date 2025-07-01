import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChessLogo2 } from "~/assets";

const Header = () => {
    const [zoom] = useState(0.9);
    return (
        <>
        <div className={styles.HeaderFrame} style={{ zoom: zoom }}>
            <div className={styles.headerLeft}>
                <Link to="/" className={styles.chessLogoCt}>
                        <img className={styles.chessLogo} src={ChessLogo2} alt="chessLogo"  />
                        <div className={styles.logoText}>Chessmate</div>
                </Link>
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