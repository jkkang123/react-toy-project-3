import React, {useState} from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css";
import {getMovieInfo} from '../api';

interface Props {
  isLoading: boolean,
  movies: any[]
}

class Home extends React.Component<Props> {
  state:Props = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    //movies.data.data.movies == {data: {data: { movies } } }
    const {
      results
    } = await getMovieInfo();
    //this.setState({movies:movies, isLoading: false})
    this.setState({movies: results, isLoading: false})
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state;
    return (<section className="container">
      {
        isLoading
          ? (<div className="loader">
            <span className="loader__text">Loading..</span>
          </div>)
          : (<div><h1>Movie</h1>
            <div className="movies">
            {movies.map(movie => (
              <Movie title={movie.title} poster_path={movie.poster_path} release_date={movie.release_date}
                vote_average={movie.vote_average} overview={movie.overview} />))}
          </div></div>)
      }
    </section>);
  }
}

export default Home;
