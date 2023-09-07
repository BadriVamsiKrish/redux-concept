import classes from './Counter.module.css';
import {  useSelector,useDispatch } from 'react-redux';
const Counter = () => {
  const dispatch=useDispatch();
  const counter = useSelector(state=>state.counter);
  const toggleCounterHandler = () => {};
  const incrementHandler = () => {
    dispatch({type:'increment',payload:2});
  };
  const decrementHandler = () => {
    dispatch({type:'decrement',payload:2});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
