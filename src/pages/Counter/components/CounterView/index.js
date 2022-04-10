import styles from "./styles.module.scss";

const CounterView = ({
  id,
  countValue,
  onIncrement,
  onDecrement,
  onReset,
}) => {
  const parityType = countValue % 2 === 0 ? "even" : "odd";
  return (
    <>
      <div
        className={`${styles.wrapper} ${
          parityType === "odd" && styles.oddBorder
        }`}
      >
        <div
          className={`${styles.text} ${
            parityType === "odd" && styles.oddBorder
          }`}
        >
          {countValue}
        </div>
        <div
          className={`${styles.text} ${
            parityType === "odd" && styles.oddBorder
          }`}
        >
          Введено {parityType === "even" ? "четное" : "нечетное"} число
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${
              parityType === "odd" && styles.oddButton
            }`}
            onClick={() => onDecrement(id)}
          >
            -
          </button>
          <button
            className={`${styles.button} ${
              parityType === "odd" && styles.oddButton
            }`}
            onClick={() => onReset(id)}
          >
            Reset
          </button>
          <button
            className={`${styles.button} ${
              parityType === "odd" && styles.oddButton
            }`}
            onClick={() => onIncrement(id)}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterView;
