import { useState, useCallback, useMemo } from "react";
import { v4 as uuid } from "uuid";
import CounterOfCountersLayout from "../components/CounterOfCountersLayout";

const CounterOfCountersContainer = () => {
  const [listOfCounters, setListOfCounters] = useState([]);

  const handleCounterAdd = useCallback(() => {
    setListOfCounters((state) => {
      const copy = [...state];
      // each of even value gets +1
      copy.map((counter) => {
        if (counter.value % 2 === 0) {
          ++counter.value;
        }
        return counter;
      });
      // add new element
      const newCounter = { id: uuid(), value: 0 };
      copy.push(newCounter);
      return copy;
    });
  }, []);

  const handleCounterRemoveLast = useCallback(() => {
    setListOfCounters((state) => {
      const copy = [...state];
      // each of odd value gets -1
      copy.map((counter) => {
        if (!(counter.value === 0 & counter.value % 2 === 0)) {
            counter.value = counter.value - 1;
        }
        return counter;
      });
      // delete last element
      copy.pop();
      return copy;
    });
  }, []);

  const handleCounterRemoveAny = useCallback((id) => {
    setListOfCounters((state) => {
      const copy = [...state];
      // each of odd value gets -1
      copy.map((counter) => {
        if (!(counter.value === 0 & counter.value % 2 === 0)) {
            counter.value = counter.value - 1;
        }
        return counter;
      });
      // delete selected element
      const counterIndexToDelete = copy.findIndex((counter) => counter.id === id);
      copy.splice(counterIndexToDelete, 1);
      return copy;
    });
  }, []);

  const handleDeleteAll = useCallback(() => {
    setListOfCounters([]);
  }, []);

  const handleIncrement = useCallback((id) => {
    setListOfCounters((state) => {
      const copy = [...state];
      const counterIndexToChange = copy.findIndex((counter) => counter.id === id);
      copy[counterIndexToChange].value = copy[counterIndexToChange].value + 1;
      return copy;
    });
  }, []);

  const handleDecrement = useCallback(
    (id) => {
      const counterIndexToChange = listOfCounters.findIndex((counter) => counter.id === id);
      if (listOfCounters[counterIndexToChange].value > 0) {
        setListOfCounters((state) => {
          const copy = [...state];
          const counterIndexToChange = copy.findIndex((counter) => counter.id === id);
          copy[counterIndexToChange].value = copy[counterIndexToChange].value - 1;
          return copy;
        });
      }
    },
    [listOfCounters]
  );

  const handleReset = useCallback((id) => {
    setListOfCounters((state) => {
      const copy = [...state];
      const counterIndexToChange = copy.findIndex((counter) => counter.id === id);
      copy[counterIndexToChange].value = 0;
      return copy;
    });
  }, []);

  return (
    <CounterOfCountersLayout
      listOfCounters={listOfCounters}
      handleCounterAdd={handleCounterAdd}
      handleCounterRemoveLast={handleCounterRemoveLast}
      handleCounterRemoveAny={handleCounterRemoveAny}
      handleDeleteAll={handleDeleteAll}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
    />
  );
};

export default CounterOfCountersContainer;
