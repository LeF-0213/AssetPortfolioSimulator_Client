import { memo } from "react";
import styles from "./Header.module.css";
import { HiRefresh } from "react-icons/hi";
import { Button } from "../common/Button";

const Header = memo(({ togglePriceSim, isPriceSimActive }) => {
  return (
    <div className={styles["header-container"]}>
      <h1 className={styles["header-title"]}>💸 자산 포트폴리오 시뮬레이터</h1>
      <Button
        onClick={togglePriceSim}
        variant={isPriceSimActive ? "active" : "secondary"}
        className={styles["header-button"]}
      >
        <HiRefresh size={20} className={isPriceSimActive ? "animate-spin" : ""} />
        {isPriceSimActive ? "Run" : "Stop"}
      </Button>
    </div>
  );
});

export default Header;
