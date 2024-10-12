import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectStep } from "../../counter/selectors";
import { changeStep, decrement, increment, reset } from "../../counter/actions";

const Counter = () => {
  const counter = useSelector(selectCounter);
  const step = useSelector(selectStep);

  const dispatch = useDispatch();

  const handlePlusClick = () => {
    dispatch(increment());
  };
  const handleMinusClick = () => {
    if (counter > 0) {
      dispatch(decrement());
    }
  };
  const handleResetClick = () => {
    dispatch(reset());
  };
  const handleChangeStep = (e) => {
    dispatch(changeStep(+e.target.value));
  };
  return (
    <div>
      <div>
        <h1>{counter}</h1>
        <input value={step} onChange={handleChangeStep} />
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
