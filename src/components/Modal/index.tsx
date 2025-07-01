import { useState } from "react";
import styles from "./style.module.css";
import { faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BishopImg,
  KingImg,
  KnightImg,
  PawnImg,
  RookImg,
  QueenImg, 
} from "~/assets";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <>
      <div className={styles.viewRankCt} onClick={() => setShowModal(true)}>
        <div className={styles.viewText}>자세히 보기</div>
        <FontAwesomeIcon className={styles.rightPrev} icon={faChevronRight} />
      </div>

      {showModal && (
        <div className={styles.modalOverlay} onClick={handleOutsideClick}>
          <div className={styles.modalBox}>
            <div className={styles.modalTop}>
              <button
                className={styles.closeBtn}
                onClick={() => setShowModal(false)}
              >
                <FontAwesomeIcon className={styles.xmark} icon={faXmark} />
              </button>
              <div className={styles.modalTitleText}>티어표</div>
            </div>

            <div className={styles.modalRankCt}>
              {[
                {
                  assets: PawnImg,
                  alt: "pawn",
                  frame: "pawnFrame",
                  rankFrame2: "pawnRankFrame2",
                },
                {
                  assets: KnightImg,
                  alt: "knight",
                  frame: "knightFrame",
                  rankFrame2: "knightRankFrame2",
                },
                {
                  assets: BishopImg,
                  alt: "bishop",
                  frame: "bishopFrame",
                  rankFrame2: "bishopRankFrame2",
                },
                {
                  assets: RookImg,
                  alt: "rook",
                  frame: "rookFrame",
                  rankFrame2: "rookRankFrame2",
                },
                {
                  assets: QueenImg,
                  alt: "queen",
                  frame: "queenFrame",
                  rankFrame2: "queenRankFrame2",
                },
                {
                  assets: KingImg,
                  alt: "king",
                  frame: "kingFrame",
                  rankFrame2: "kingRankFrame2",
                },
              ].map(({ assets, alt, frame, rankFrame2 }) => (
                <div key={alt} className={styles[frame]}>
                  <div className={styles[`${frame}ImgFrame`]}>
                    <img
                      className={styles.chessImg}
                      src={assets}
                      alt={alt}
                    />
                  </div>
                  <div className={styles.rankTextFrame}>
                    {/* 현재 티어 */}
                  </div>
                  <div className={styles[rankFrame2]}>
                    {/* 티어 정렬 부분 */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
