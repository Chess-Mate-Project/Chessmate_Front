import { useState } from "react";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCheck,
  faArrowUpRightDots,
} from "@fortawesome/free-solid-svg-icons";
import { Chart, Modal, Streak } from "~/allFiles";
import { LankImg } from "~/assets";

const Mypage = () => {
  const [zoom] = useState(0.9);
  return (
    <>
      <div className={styles.myPageFrame} style={{ zoom: zoom }}>
        <div className={styles.frameTop}>
          <div className={styles.frameLeft}>
            <div className={styles.infoFrame}>
              <div className={styles.infoFrameCt}>
                <div className={styles.infoProfile}>
                  <div className={styles.profileImg}>?</div>
                </div>
                <div className={styles.infoId}>moon080108</div>
                <div className={styles.lankCt}>
                  <div className={styles.lankTitle}>티어</div>
                  <div className={styles.lankRight}>
                    <img
                      className={styles.lankImg}
                      src={LankImg}
                      alt="lankImg"
                    />
                    <div className={styles.lankText}>V</div>
                    <div className={styles.lankText2}>600</div>
                  </div>
                </div>
              </div>
              <div className={styles.infoLankCt}>
                <div className={styles.infoLankTop}>
                  <div className={styles.infoLank}>등급</div>
                  <div className={styles.infoLevel}>레밸</div>
                </div>
                <div className={styles.infoLankBottom}>
                  <div className={styles.infoLankBottomCt}>
                    <div className={styles.levelBar}>
                      <div className={styles.levelBarFill}></div>
                    </div>
                    <div className={styles.levelText}>62%</div>
                  </div>
                </div>
                <Modal />
              </div>
            </div>

            <div className={styles.infoFrameCt2}>
              <div className={styles.streakFrame}>
                <div className={styles.streakTitleCt}>
                  <FontAwesomeIcon
                    className={styles.streakIcon}
                    icon={faSquareCheck}
                  />
                  <div className={styles.streakTitle}>스트릭</div>
                </div>
                <div className={styles.streakTextCt}>
                  <div className={styles.numDays}>0일</div>
                  <div className={styles.numDaysText}>
                    오늘은 문제를 풀지 않았어요
                  </div>
                </div>
              </div>

              <div className={styles.lankFrame}>
                <div className={styles.lankTitleCt}>
                  <FontAwesomeIcon
                    className={styles.lankIcon}
                    icon={faArrowUpRightDots}
                  />
                  <div className={styles.lankTitle}>래밸</div>
                </div>
                <div className={styles.lankTextCt}>
                  <div className={styles.level}>2레벨</div>
                  <div className={styles.levelPhrase}>
                    25+ exp 달성 시 pawn 레벨업!
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.frameRight}>
            <Chart />
          </div>
        </div>

        <Streak />
      </div>
    </>
  );
};

export default Mypage;
