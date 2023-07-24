import { Button } from "@/components/buttons";
import { Shape } from "@/components/shapes";
import styles from "@/styles/pages/playGame.module.scss";

const TopBar = () => {
  return (
    <div className={styles["top-bar-container"]}>
      <div className={styles["circle-cross-container"]}>
        <Shape name="cross" size={32} />
        <Shape name="circle" size={32} />
      </div>
      <div className={styles["turn-container"]}>
        <Shape name="cross" size={24} fill="grey" />
        <h1 className={`${styles["turn-text"]} heading-xs`}> Turn</h1>
      </div>
      <Button>
        <Shape name="restart" size={18} />
      </Button>
    </div>
  );
};

export default TopBar;
