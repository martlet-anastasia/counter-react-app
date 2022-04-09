import styles from "./styles.module.scss";

export const CounterView = ({
  countValue,
  parityType,
  onIncrement,
  onDecrement,
  onReset,
}) => {
  return (
    <>
      <div className={`${styles.wrapper} ${parityType === 'odd' && styles.oddBorder}`}>
        <div className={`${styles.text} ${parityType === 'odd' && styles.oddBorder}`}>{countValue}</div>
        <div className={`${styles.text} ${parityType === 'odd' && styles.oddBorder}`}>
          Введено {parityType === "even" ? "четное" : "нечетное"} число
        </div>
        <div className={styles.buttonContainer}>
          <button className={`${styles.button} ${parityType === 'odd' && styles.oddButton}`} onClick={onDecrement}>
            -
          </button>
          <button className={`${styles.button} ${parityType === 'odd' && styles.oddButton}`} onClick={onReset}>
            Reset
          </button>
          <button className={`${styles.button} ${parityType === 'odd' && styles.oddButton}`} onClick={onIncrement}>
            +
          </button>
        </div>
      </div>
    </>
  );
};
