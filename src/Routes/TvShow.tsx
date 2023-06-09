import { useQuery } from "react-query";
import styled from "styled-components";
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import {
    getAiringTodayTvShows,
    getPopularTvShows,
    getTopRatedTvShows,
    IGetTvShowsResult,
} from "../api";
import { makeImagePath } from "../utils";
import { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

const Wrapper = styled.div`
    background: black;
    padding-bottom: 200px;
`;

const Loader = styled.div`
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Banner = styled.div<{ bgPhoto: string }>`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
        url(${(props) => props.bgPhoto});
    background-size: cover;
`;

const Title = styled.h2`
    font-size: 68px;
    margin-bottom: 20px;
`;

const Overview = styled.p`
    font-size: 30px;
    width: 50%;
`;

const Slider = styled.div`
    position: relative;
`;

const SliderTitle = styled.h3`
    font-size: 46px;
    margin-bottom: 20px;
`;
const Row = styled(motion.div)`
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(6, 1fr);
    width: 100%;
`;

const Box = styled(motion.div)<{ bgPhoto: string }>`
    background-color: white;
    background-image: url(${(props) => props.bgPhoto});
    background-size: cover;
    background-position: center center;
    height: 200px;
    font-size: 66px;
    cursor: pointer;
    &:first-child {
        transform-origin: center left;
    }
    &:last-child {
        transform-origin: center right;
    }
`;

const Info = styled(motion.div)`
    padding: 10px;
    background-color: ${(props) => props.theme.black.lighter};
    opacity: 0;
    position: absolute;
    width: 100%;
    bottom: 0;
    h4 {
        text-align: center;
        font-size: 18px;
    }
`;
const rowVariants = {
    hidden: {
        x: window.outerWidth + 5,
    },
    visible: {
        x: 0,
    },
    exit: {
        x: -window.outerWidth - 5,
    },
};

const boxVariants = {
    normal: {
        scale: 1,
    },
    hover: {
        scale: 1.3,
        y: -80,
        transition: {
            delay: 0.5,
            duaration: 0.1,
            type: "tween",
        },
    },
};

const infoVariants = {
    hover: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duaration: 0.1,
            type: "tween",
        },
    },
};
const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
`;

const BigTv = styled(motion.div)`
    position: absolute;
    width: 40vw;
    height: 80vh;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 15px;
    overflow: hidden;
    background-color: ${(props) => props.theme.black.lighter};
`;

const BigCover = styled.div`
    width: 100%;
    background-size: cover;
    background-position: center center;
    height: 400px;
`;

const BigTitle = styled.h3`
    color: ${(props) => props.theme.white.lighter};
    padding: 20px;
    font-size: 46px;
    position: relative;
    top: -80px;
`;

const BigOverview = styled.p`
    padding: 20px;
    position: relative;
    top: -80px;
    color: ${(props) => props.theme.white.lighter};
`;
const offset = 6;
function TVShow() {
    const history = useHistory();
    const bigTVMatch = useRouteMatch<{ tvId: string }>("/tv/:tvId");
    const [index, setIndex] = useState(0);
    const [leaving, setLeaving] = useState(false);

    const toggleLeaving = () => setLeaving((prev) => !prev);
    const onBoxClicked = (tvId: number) => {
        history.push(`/tv/${tvId}`);
    };
    const onOverlayClick = () => history.push("/");

    const { scrollY } = useViewportScroll();

    const useMultipleQuery = () => {
        const popular = useQuery<IGetTvShowsResult>(
            ["tv", "popular"],
            getPopularTvShows
        );
        const topRated = useQuery<IGetTvShowsResult>(
            ["tv", "topRated"],
            getTopRatedTvShows
        );
        const airingToday = useQuery<IGetTvShowsResult>(
            ["tv", "airingToday"],
            getAiringTodayTvShows
        );
        return [popular, topRated, airingToday];
    };

    const [
        { data: popularData, isLoading: popularLoading },
        { data: topRatedData, isLoading: topRatedLoading },
        { data: airingTodayData, isLoading: airingTodayLoading },
    ] = useMultipleQuery();

    const increaseIndex = () => {
        if (popularData) {
            if (leaving) return;
            toggleLeaving();
            const totalTVs = popularData.results.length - 1;
            const maxIndex = Math.floor(totalTVs / offset) - 1;
            setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
        }
    };

    const clickedTV =
        bigTVMatch?.params.tvId &&
        popularData?.results.find((tv) => tv.id === +bigTVMatch.params.tvId);

    return (
        <Wrapper>
            {popularLoading || topRatedLoading || airingTodayLoading ? (
                <Loader>Loading...</Loader>
            ) : (
                <>
                    <Banner
                        onClick={increaseIndex}
                        bgPhoto={makeImagePath(
                            popularData?.results[0].backdrop_path || ""
                        )}
                    >
                        <Title>{popularData?.results[0].name}</Title>
                        <Overview>{popularData?.results[0].overview}</Overview>
                    </Banner>
                    <Slider>
                        <AnimatePresence
                            initial={false}
                            onExitComplete={toggleLeaving}
                        >
                            <SliderTitle>Popular</SliderTitle>
                            <Row
                                variants={rowVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ type: "tween", duration: 1 }}
                                key={index}
                            >
                                {popularData?.results
                                    .slice(1)
                                    .slice(
                                        offset * index,
                                        offset * index + offset
                                    )
                                    .map((tv) => (
                                        <Box
                                            layoutId={tv.id + ""}
                                            key={tv.id}
                                            whileHover="hover"
                                            initial="normal"
                                            variants={boxVariants}
                                            onClick={() => onBoxClicked(tv.id)}
                                            transition={{ type: "tween" }}
                                            bgPhoto={makeImagePath(
                                                tv.backdrop_path,
                                                "w500"
                                            )}
                                        >
                                            <Info variants={infoVariants}>
                                                <h4>{tv.name}</h4>
                                            </Info>
                                        </Box>
                                    ))}
                            </Row>
                            <SliderTitle>Top Rated</SliderTitle>
                            <Row
                                variants={rowVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ type: "tween", duration: 1 }}
                                key={index}
                            >
                                {topRatedData?.results.map((tv) => (
                                    <Box
                                        layoutId={tv.id + ""}
                                        key={tv.id}
                                        whileHover="hover"
                                        initial="normal"
                                        variants={boxVariants}
                                        onClick={() => onBoxClicked(tv.id)}
                                        transition={{ type: "tween" }}
                                        bgPhoto={makeImagePath(
                                            tv.backdrop_path,
                                            "w500"
                                        )}
                                    >
                                        <Info variants={infoVariants}>
                                            <h4>{tv.name}</h4>
                                        </Info>
                                    </Box>
                                ))}
                            </Row>
                            <SliderTitle>Airing Today</SliderTitle>
                            <Row
                                variants={rowVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ type: "tween", duration: 1 }}
                                key={index}
                            >
                                {airingTodayData?.results.map((tv) => (
                                    <Box
                                        layoutId={tv.id + ""}
                                        key={tv.id}
                                        whileHover="hover"
                                        initial="normal"
                                        variants={boxVariants}
                                        onClick={() => onBoxClicked(tv.id)}
                                        transition={{ type: "tween" }}
                                        bgPhoto={makeImagePath(
                                            tv.backdrop_path,
                                            "w500"
                                        )}
                                    >
                                        <Info variants={infoVariants}>
                                            <h4>{tv.name}</h4>
                                        </Info>
                                    </Box>
                                ))}
                            </Row>
                        </AnimatePresence>
                    </Slider>
                    <AnimatePresence>
                        {bigTVMatch ? (
                            <>
                                <Overlay
                                    onClick={onOverlayClick}
                                    exit={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                />
                                <BigTv
                                    style={{ top: scrollY.get() + 100 }}
                                    layoutId={bigTVMatch.params.tvId + ""}
                                >
                                    {clickedTV && (
                                        <>
                                            <BigCover
                                                style={{
                                                    backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                                                        clickedTV.backdrop_path,
                                                        "w500"
                                                    )})`,
                                                }}
                                            />
                                            <BigTitle>
                                                {clickedTV.name}
                                            </BigTitle>
                                            <BigOverview>
                                                {clickedTV.overview}
                                            </BigOverview>
                                        </>
                                    )}
                                </BigTv>
                            </>
                        ) : null}
                    </AnimatePresence>
                </>
            )}
        </Wrapper>
    );
}
export default TVShow;
