import axios from 'axios';

export async function getMovieInfo() {
  // Generic 을 통해 응답 데이터의 타입을 설정 할 수 있습니다.
  const response = await axios.get<movieInfo>(
    `https://api.themoviedb.org/3/movie/popular?api_key=d771ee361528f7664dfcdb3fde78920a`
  );
  return response.data; // 데이터 값을 바로 반환하도록 처리합니다.
}

export interface movieInfo {
  page: number,
  results: {
    adult: boolean,
    backdrop_path: string,
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
  }
}
