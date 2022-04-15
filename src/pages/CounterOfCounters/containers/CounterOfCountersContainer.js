import { v4 as uuid } from "uuid";

import { useState, useCallback, useMemo } from "react";
import CounterOfCountersLayout from "../components/CounterOfCountersLayout";

const CounterOfCountersContainer = () => {
  const [listOfCounters, setListOfCounters] = useState([]);

  const handleCounterAdd = useCallback(() => {
    setListOfCounters((state) => {
      const copy = [...state];
      // each of even value gets +1
      const updatedState = copy.map((counter) => {
        return {
          ...counter,
          value: counter.value % 2 === 0 ? counter.value + 1 : counter.value,
        };
      });
      // add new element
      const newCounter = { id: uuid(), value: 0 };
      return [...updatedState, newCounter];
    });
  }, []);

  const handleCounterRemoveLast = useCallback(() => {
    setListOfCounters((state) => {
      const copy = [...state];
      copy.splice(-1);
      // each of odd value gets -1
      const updatedState = copy.map((counter) => {
        return {
          ...counter,
          value: counter.value % 2 === 0 ? counter.value : counter.value - 1,
        };
      });
      return updatedState;
    });
  }, []);

  const handleCounterRemoveAny = useCallback((id) => {
    setListOfCounters((state) => {
      const copy = [...state];
      // delete selected element
      const counterIndexToDelete = copy.findIndex((counter) => counter.id === id);
      copy.splice(counterIndexToDelete, 1);
      // each of odd value gets -1
      const updatedState = copy.map((counter) => {
        return {
          ...counter,
          value: counter.value % 2 === 0 ? counter.value : counter.value - 1,
        };
      });
      return updatedState;
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
