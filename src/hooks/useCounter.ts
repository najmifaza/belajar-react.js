import { useState } from "react"; // use adalah hook di dalam react

function useCounter() {
  //ini adalah funct hook
  const [count, setCount] = useState(0); //index pertama adalah variabel dan yang kedua adalah funct
  const handelDecrement = () => {
    setCount(count - 1);
  };
  const handelIncrement = () => {
    setCount(count + 1);
  };
  const handelResetCounter = () => {
    setCount(0);
  };
  return {
    count,
    handelDecrement,
    handelIncrement,
    handelResetCounter,
  };
}

export default useCounter;
