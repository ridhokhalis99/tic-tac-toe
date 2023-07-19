import { times } from "lodash";
import styles from "@/styles/pages/playGame.module.scss";

const Field = () => {
  return times(3, (i: any) => (
    <div className={styles["field-item-row"]} key={i}>
      {times(3, (j: any) => (
        <div className={styles["field-item"]} key={j}></div>
      ))}
    </div>
  ));
};

export default Field;
