import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { useState } from "react";
import { School } from "~/assets";

const Footer = () => {
  const [zoom] = useState(0.9);

  return (
    <>
      <div className={styles.footerFrame} style={{ zoom: zoom }}>
        <div className={styles.footerLeft}>
          <div className={styles.linkCt}>
            <Link className={styles.lanking} to="/">
              랭킹
            </Link>
          </div>
          <div className={styles.footerTextFrame}>
            <div className={styles.footerTextCt}>
              <div className={styles.footerText}>ChessMate</div>
              <div className={styles.footerLine} />
              <div className={styles.footerText}>
                경상북도 봉호로 14 (경북소프트웨어마이스터고등학교)
              </div>
            </div>
            <div className={styles.footerText2Ct}>
              <div className={styles.footerText2}>
                Copyright © 2025 ChessMate. All rights reserved.
              </div>
            </div>
          </div>
        </div>
        <img className={styles.School} src={School} alt="School" />
      </div>
    </>
  );
};

export default Footer;
