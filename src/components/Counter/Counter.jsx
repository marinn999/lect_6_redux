import { useSelector } from "react-redux";

const Counter = () => {
  // state.counter це «counter:» зі store.js
  const counter = useSelector((state) => state.counter.counter);
  const step = useSelector((state) => state.counter.step);

  const handlePlusClick = () => {};
  const handleMinusClick = () => {};
  const handleResetClick = () => {};
  const handleChangeStep = () => {};
  return (
    <div>
      <div>
        <h1>{counter}</h1>
        <input value={1} onChange={handleChangeStep} />
        <div>
          <button onClick={handleMinusClick}>minus</button>
          <button onClick={handleResetClick}>reset</button>
          <button onClick={handlePlusClick}>plus</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
