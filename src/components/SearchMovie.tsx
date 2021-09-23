import React, { useReducer }from "react";
import {Link} from 'react-router-dom';
import "./Movie.css";

interface Props {
  link: string,
  subtitle: string,
  pubDate: string,
  title: string,
  image: string,
  userRating: string,
  director: string,
  actor: string,
}

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

const SearchMovie: React.FC<Props> = ({link, subtitle, pubDate, title, image, userRating, director, actor}) => {
  
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DECREASE' });
  return (
    <div className="movie">
        <Link to={{
          pathname: `/movie/detail/${subtitle}`,
          state:{
            link,
            subtitle,
            pubDate,
            title,
            image,
            userRating
          }
        }}>
        <img src={image} alt={title} title={title}></img>
        <div className="movie__data">
          <h3 className="movie__title">{
              title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")
            }</h3>
          <p className="movie__userRating">
            <span>평점</span> {userRating}/10
          </p>
          <p className="movie__pubDate">
            <span>개봉일</span> {pubDate}
          </p>
        <p className="movie__director">
          <span>감독</span> {director}
        </p>
        <p className="movie__actor">
          <span>배우</span> {actor}
        </p>
        </div>
      </Link>
      <div className="movie__ddabong">
        <p>
          좋아요 : <b>{count}</b>
        </p>
        <button onClick={(onIncrease) }>+1</button>
        <button onClick={(onDecrease) }>-1</button>
      </div>
  </div>
  )
};



export default SearchMovie;
