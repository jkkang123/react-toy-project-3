import "./Movie.css";

type MovieInfo = {
  idx: number;
  title: string,
  poster_path: string,
  release_date: string,
  vote_average: number,
  overview: string,
  count: number;
  onIncrease: (index: number) => void;
  onDecrease: (index: number) => void;
}

function Movie({idx, count, title, poster_path, release_date, vote_average, overview, onIncrease, onDecrease}: MovieInfo) {
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
    <p>
        좋아요 : <b>{count}</b>
    </p>
    <button onClick={() => onIncrease(idx)}>좋아요</button>
    <button onClick={() => onDecrease(idx)}>싫어요</button>
  </div>
  )
}

export default Movie;
