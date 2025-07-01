import React from "react";
import styles from "./style.module.css";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getPastYearDates = () => {
  const dates: string[] = [];
  const today = new Date();
  for (let i = 0; i < 365; i++) {
    const d = new Date();
    d.setDate(today.getDate() - i);
    dates.unshift(d.toISOString().split("T")[0]);
  }
  return dates;
};

const getColor = (count: number) => {
  if (count === 0) return "#fff";
  if (count <= 1) return "#cce4ff";
  if (count <= 3) return "#99c9ff";
  if (count <= 5) return "#66adff";
  if (count <= 7) return "#338eff";
  return "#0066ff";
};

const Streak: React.FC = () => {
  const dates = getPastYearDates();

  const fakeData: { [key: string]: number } = {};
  dates.forEach((date) => {
    fakeData[date] = Math.floor(Math.random() * 7);
  });

  return (
    <div className={styles.streakFrame2}>
      <div className={styles.sterakLeft}>
      <div className={styles.yearCt}>
        
        </div>
        <div className={styles.streakTitleCt}>
          <FontAwesomeIcon className={styles.streakIcon} icon={faSquareCheck} />
          <div className={styles.streakTitle}>스트릭</div>
        </div>
        <div className={styles.streakDays}>현재 2일</div>
        <div className={styles.yearDaysCt}>
          <div className={styles.sun}>S</div>
          <div className={styles.mon}>M</div>
          <div className={styles.tue}>T</div>
          <div className={styles.wed}>W</div>
          <div className={styles.thu}>T</div>
          <div className={styles.fri}>F</div>
          <div className={styles.sat}>S</div>
        </div>
        <div className={styles.grid}>
          {dates.map((date, idx) => (
            <div
              key={idx}
              className={styles.box}
              title={`${date} - ${fakeData[date]} commits`}
              style={{ backgroundColor: getColor(fakeData[date]) }}
            />
          ))}
        </div>
        <div className={styles.streakYearCt}>
          {/* 월별 로직 구현해서 개발 */}
        </div>
      </div>
      <div className={styles.yearCt}>
        <select className={styles.year} name="year">
          <option value="" disabled hidden>
          </option>
          <option value="2025">2025</option>
        </select>
      </div>
    </div>
  );
};

export default Streak;
