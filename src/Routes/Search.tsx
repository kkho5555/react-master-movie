import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import {
    searchMovies,
    IGetMoviesResult,
    searchTvShows,
    IGetTvShowsResult,
} from "../api";
import { makeImagePath } from "../utils";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 20px;
`;

const ResultList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
`;
const SliderTitle = styled.h3`
    font-size: 46px;
    margin-bottom: 20px;
`;
const ResultItem = styled.li`
    display: flex;
    flex-direction: column;
`;

const ResultImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 10px;
`;

const ResultTitle = styled.h4`
    font-size: 20px;
    margin-bottom: 5px;
`;

const ResultReleaseDate = styled.p`
    font-size: 16px;
    margin-bottom: 5px;
`;

const ResultOverview = styled.p`
    font-size: 16px;
    line-height: 1.4;
    margin-bottom: 10px;
`;

function Search() {
    const location = useLocation();
    const keyword = new URLSearchParams(location.search).get("keyword");
    const [movieSearchResult, setMovieSearchResult] =
        useState<IGetMoviesResult>();
    useEffect(() => {
        const fetchSearchResult = async () => {
            const movieResult = await searchMovies(keyword || "");
            setMovieSearchResult(movieResult);
        };
        fetchSearchResult();
    }, [keyword]);
    const [tvSearchResult, setTvSearchResult] = useState<IGetTvShowsResult>();
    useEffect(() => {
        const fetchSearchResult = async () => {
            const tvResult = await searchTvShows(keyword || "");
            setTvSearchResult(tvResult);
        };
        fetchSearchResult();
    }, [keyword]);
    return (
        <Wrapper>
            {movieSearchResult || tvSearchResult ? (
                <ResultList>
                    <SliderTitle>Movie Result</SliderTitle>
                    {movieSearchResult?.results.map((movie) => (
                        <ResultItem key={movie.id}>
                            <ResultImage
                                src={makeImagePath(movie.poster_path)}
                                alt=""
                            />
                            <ResultTitle>{movie.title}</ResultTitle>
                            <ResultReleaseDate>{movie.title}</ResultReleaseDate>
                            <ResultOverview>{movie.overview}</ResultOverview>
                        </ResultItem>
                    ))}
                    <SliderTitle>TV Result</SliderTitle>
                    {tvSearchResult?.results.map((tv) => (
                        <ResultItem key={tv.id}>
                            <ResultImage
                                src={makeImagePath(tv.poster_path)}
                                alt=""
                            />
                            <ResultTitle>{tv.name}</ResultTitle>
                            <ResultReleaseDate>{tv.name}</ResultReleaseDate>
                            <ResultOverview>{tv.overview}</ResultOverview>
                        </ResultItem>
                    ))}
                </ResultList>
            ) : (
                <p>No Results</p>
            )}
        </Wrapper>
    );
}
export default Search;
