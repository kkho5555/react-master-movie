const API_KEY = "563446817a04da527b7bf1f0171a5d0a";
const BASE_PATH = "https://api.themoviedb.org/3";

export interface IMovie {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
}

export interface IGetMoviesResult {
    dates: {
        maximum: string;
        minimum: string;
    };
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

interface ITvShow {
    id: number;
    backdrop_path: string;
    poster_path: string;
    name: string;
    overview: string;
}

export interface IGetTvShowsResult {
    dates: {
        maximum: string;
        minimum: string;
    };
    page: number;
    results: ITvShow[];
    total_pages: number;
    total_results: number;
}

export function getMovies() {
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
        (response) => response.json()
    );
}
export const getLatestMovies = () => {
    return fetch(`${BASE_PATH}/movie/latest?api_key=${API_KEY}`).then(
        (response) => response.json()
    );
};

export const getTopRatedMovies = () => {
    return fetch(`${BASE_PATH}/movie/top_rated?api_key=${API_KEY}`).then(
        (response) => response.json()
    );
};

export const getUpcomingMovies = () => {
    return fetch(`${BASE_PATH}/movie/upcoming?api_key=${API_KEY}`).then(
        (response) => response.json()
    );
};

export const getLatestTvShows = () => {
    return fetch(`${BASE_PATH}/tv/latest?api_key=${API_KEY}`).then((response) =>
        response.json()
    );
};

export const getAiringTodayTvShows = () => {
    return fetch(`${BASE_PATH}/tv/airing_today?api_key=${API_KEY}`).then(
        (response) => response.json()
    );
};

export const getPopularTvShows = () => {
    return fetch(`${BASE_PATH}/tv/popular?api_key=${API_KEY}`).then(
        (response) => response.json()
    );
};

export const getTopRatedTvShows = () => {
    return fetch(`${BASE_PATH}/tv/top_rated?api_key=${API_KEY}`).then(
        (response) => response.json()
    );
};

export const searchMovies = (keyword: string) => {
    return fetch(
        `${BASE_PATH}/search/movie?api_key=${API_KEY}&query=${keyword}`
    ).then((response) => response.json());
};

export const searchTvShows = (keyword: string) => {
    return fetch(
        `${BASE_PATH}/search/tv?api_key=${API_KEY}&query=${keyword}`
    ).then((response) => response.json());
};
