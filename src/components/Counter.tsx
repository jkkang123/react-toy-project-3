import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, setMovieCnt } from '../modules/counter';

type CounterProps = {
  idx: number;
  count: number;
  onIncrease: (index: number) => void;
  onDecrease: (index: number) => void;
}

function Counter( {
  idx,
  count,
  onIncrease,
  onDecrease,
} : CounterProps) {
  return (
    <div className="counter">
      <h1>좋아요: {count}</h1>
      <button onClick={() => onIncrease(idx)}>좋아요</button>
      <button onClick={() => onDecrease(idx)}>싫어요</button>
    </div>
  );
}

export default Counter;