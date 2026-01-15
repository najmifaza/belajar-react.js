import useCounter from "../hooks/useCounter";
import Button from "./Button";
import { Plus, Minus, RefreshCcw } from "lucide-react";

function Counter() {
  const { count, handelDecrement, handelIncrement, handelResetCounter } =
    useCounter();
  return (
    <div className="flex gap-16 justify-around">
      <Button icon={<RefreshCcw size={16} />} onClick={handelResetCounter}>
        Reset
      </Button>
      <Button icon={<Minus size={16} />} onClick={handelDecrement}>
        {" "}
        Minus
      </Button>
      <h1 className="font-bold">{count}</h1>
      {/* <h1 className="font-bold">{nama}</h1> */}
      <Button icon={<Plus size={16} />} onClick={handelIncrement}>
        {" "}
        Plus
      </Button>
    </div>
  );
}

export default Counter;
