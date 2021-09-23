import React, { useReducer } from "react";
import "./Movie.css";
import CounterContainer from '../container/CounterContainer';

type Action = 
  | { type: 'INCREASE' }
  | { type: 'DECREASE'};

function reducer(state: number, action: Action): number  {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return  state - 1;
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

type MovieInfo = {
  title: string,
  poster_path: string,
  release_date: string,
  vote_average: number,
  overview: string
}

function Movie({title, poster_path, release_date, vote_average, overview}: MovieInfo) {
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DECREASE' });
  return (
    <div className="movie">
      <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={title} title={title}></img>
    <div className="movie__data">
      <h3 className="movie__title">{title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")}</h3>
    <h4 className="movie__user_rating"><span>평점 </span>{vote_average}/10</h4>
      <h5 className="movie__year"><span>개봉일</span>{release_date}</h5>
    <p className="movie__actor"><span>설명</span>{overview}</p>
    </div>
    {/* <div className="movie__ddabong">
      <p>
        좋아요 : <b>{count}</b>
      </p>
      <button onClick={(onIncrease) }>+1</button>
      <button onClick={(onDecrease) }>-1</button>
    </div> */}
    <CounterContainer />
  </div>
  )
}

export default Movie;
