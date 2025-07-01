import React from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryContainer,
} from "victory";
import customTheme from "../themes/customTheme";
import styles from "./style.module.css";

const sampleData = [
  { x: "Jan", y: 40 },
  { x: "Feb", y: 80 },
  { x: "Mar", y: 65 },
];

const Chart: React.FC = () => {
  return (
    <div className={styles.chartFrame}>
      <div className={styles.chartText}>성장 기여도</div>

      <div className={styles.chart}>
        <VictoryChart
          theme={customTheme}
          width={800}
          height={450}
          domainPadding={30}
          containerComponent={<VictoryContainer />}
        >
          <VictoryAxis />
          <VictoryAxis dependentAxis />
          <VictoryLine data={sampleData} />
        </VictoryChart>
      </div>
    </div>
  );
};

export default Chart;
