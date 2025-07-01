import styles from "./style.module.css";
import { useState } from "react";
import { ChessBc, ChessLogo2 } from "~/assets";
import Login from "../Login";

const MainPageCp = () => {
  const [zoom] = useState(0.9);

  return (
    <div
      className={styles.mainPageFrame}
      style={{
        zoom: zoom,
        backgroundImage: `linear-gradient(to top, rgba(14,17,23,1), rgba(14,17,23,0.05)), url(${ChessBc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        zIndex: -1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={styles.mainPageTextCt}>
        <div className={styles.mainPageText}>
          "세기의 게임", 당신의 전략을 펼쳐나가는
        </div>
        <div className={styles.mainPageText2Ct}>
          <div className={styles.mainPageText2}>최고의 온라인 체스 아레나</div>
          <div className={styles.ChessLogoCt}>
            <img
              className={styles.ChessLogo}
              src={ChessLogo2}
              alt="ChessLogo2"
            />
            <div className={styles.ChessLogoText}>ChessMate</div>
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default MainPageCp;
