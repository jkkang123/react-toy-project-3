import {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, setMovieCnt } from '../modules/counter';
import axios from 'axios';
import Movie from '../components/Movie';


function CounterContainer () {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = (idx: number) => {
    dispatch(increase(idx));
  };

  const onDecrease = (idx: number) => {
    dispatch(decrease(idx));
  };

  const onSetMovieCnt = (arr: number[]) => {
    dispatch(setMovieCnt(arr));
  };

  interface MovieInfo {
    title: string,
    poster_path: string,
    release_date: string,
    vote_average: number,
    overview: string
  }
  const [movies, setMovies] = useState<Array<MovieInfo>>([])

  const getMovies = async () => {
    const {
      data: {results}
    } = await axios.get(
       "https://api.themoviedb.org/3/movie/popular?api_key=d771ee361528f7664dfcdb3fde78920a"
    );
    onSetMovieCnt(Array.from({length: results.length}, () => 0))
    setMovies(results)
  }

  useEffect(() => {
    if (movies.length !== 0) return
    getMovies()
  }, [movies])

  return (
      <div>
        {movies.map((item, idx) => {
            return (
                <Movie
                    idx={idx}
                    release_date={item.release_date}
                    title={item.title}
                    vote_average={item.vote_average}
                    overview={item.overview}
                    poster_path={item.poster_path}
                    count={count[idx]}
                    onIncrease={() => onIncrease(idx)}
                    onDecrease={() => onDecrease(idx)}
                />
            )
        })}
        </div>
  );
};

export default CounterContainer;