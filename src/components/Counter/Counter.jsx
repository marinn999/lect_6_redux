import { useSelector } from "react-redux";
import { selectCounter, selectStep } from "../../counter/selectors";

const Counter = () => {
  const counter = useSelector(selectCounter);
  const step = useSelector(selectStep);

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
