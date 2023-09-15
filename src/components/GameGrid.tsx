import React from "react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const { data, isLoading, error, hasNextPage, fetchNextPage } = useGames();
  if (error)
    return (
      <div className="mb-10">
        <p className="bg-red-700 p-2 text-white font-bold text-3xl ">
          استفاده کنید <span>VPN</span> برای دیدن بازی ها از
        </p>
        <p>
          استفاده میکند <span>rawg.io</span> سایت<span>API</span> چون این وبسایت
          از
        </p>
      </div>
    );
  if (isLoading) return null;
  const skeletons = [];
  for (let i = 1; i < 20; i++) {
    skeletons.push(i);
  }
  const fetchedGamesCount =
    data?.pages.reduce((totall, page) => totall + page.results.length, 0) || 0;
  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={hasNextPage!}
      loader={<p>Loading...</p>}
      next={() => fetchNextPage()}
    >
      <section className=" grid sm:grid-cols-3  gap-4 place-items-center ">
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data?.pages.map((page) => (
          <React.Fragment>
            {page.results.map((game) => (
              <GameCard game={game} />
            ))}
          </React.Fragment>
        ))}
      </section>
    </InfiniteScroll>
  );
};
export default GameGrid;
