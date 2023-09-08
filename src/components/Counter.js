import classes from './Counter.module.css';
import{counterActions} from '../store/index';
import {  useSelector,useDispatch } from 'react-redux';
const Counter = () => {
  const dispatch=useDispatch();
  const counter = useSelector(state=>state.counter.counter);
  const showcounter = useSelector(state=>state.counter.showcounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment(1));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement(1));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showcounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
