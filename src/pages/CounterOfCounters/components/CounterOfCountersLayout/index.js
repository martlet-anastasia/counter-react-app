import styles from "./styles.module.scss";
import PropTypes from "prop-types";

import CounterView from "../../../Counter/components/CounterView";

const CounterOfCountersLayout = ({ listOfCounters, handleCounterAdd, handleCounterRemoveLast, handleCounterRemoveAny, handleDeleteAll, handleIncrement, handleDecrement, handleReset }) => {
  return (
    <>
      <div className={styles.controlBtnContainer}>
        <button className={styles.button} onClick={handleCounterAdd}>
          Add Counter
        </button>
        <button className={styles.button} onClick={handleCounterRemoveLast}>
          Remove Counter
        </button>
        <button className={styles.button} onClick={handleDeleteAll}>
          Reset
        </button>
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.summaryText}>{`Total counters number: ${listOfCounters.length}`}</p>
        <p className={styles.summaryText}>
          {`Sum of all counters value: 
          ${listOfCounters.reduce((counterSum, { value }) => counterSum + value, 0)}`}
        </p>
      </div>
      <div>
        {listOfCounters.map((counter) => {
          return <CounterView key={counter.id} id={counter.id} countValue={counter.value} onIncrement={handleIncrement} onDecrement={handleDecrement} onReset={handleReset} handleCounterRemoveAny={handleCounterRemoveAny}/>;
        })}
      </div>
    </>
  );
};

CounterOfCountersLayout.propTypes = {
  listOfCounters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleCounterAdd: PropTypes.func.isRequired,
  handleCounterRemove: PropTypes.func.isRequired,
  handleDeleteAll: PropTypes.func.isRequired,
};

export default CounterOfCountersLayout;
