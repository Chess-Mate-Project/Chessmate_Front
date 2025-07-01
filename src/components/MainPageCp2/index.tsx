import { Link } from "react-router-dom";
import styles from "./style.module.css"
import { useState } from "react";

const MainPageCp2 = () => {
    const [zoom] = useState(0.9);
    return (
        <>
            <div className={styles.MainPage2Frame} style={{ zoom: zoom }}>
                <div className={styles.textFrame}>
                    <div className={styles.textCt}>
                        <div className={styles.text}>마이페이지의 티어표를 보고 자신의 체스 실력을 증명해보세요 </div>
                        <div className={styles.text2}>체스의 기물 ( 폰, 나이트, 비숍, 룩, 킹 )으로 티어를 정해 본인의 성취감을 느껴보세요</div>
                        <Link className={styles.myPageTo} to="/">마이페이지</Link>
                    </div>
                    <div className={styles.text2Ct}>
                        <div className={styles.text}>랭킹을 보고 전세계 체스인들과 경쟁해보세요!  </div>
                        <div className={styles.text2}>전세계 사람들의 랭킹을 보며 사람들과 경쟁해 자신의 타이틀을 증명해보세요</div>
                        <Link className={styles.LankingTo} to="/">랭킹</Link>
                    </div>
                    <div className={styles.text3Ct}>
                        <div className={styles.text}>마이페이지의 티어표를 보고 자신의 체스 실력을 증명해보세요 </div>
                        <div className={styles.text2}>체스의 기물 ( 폰, 나이트, 비숍, 룩, 킹 )으로 티어를 정해 본인의 성취감을 느껴보세요</div>
                        <Link className={styles.myPageTo} to="/Mypage">마이페이지</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPageCp2;