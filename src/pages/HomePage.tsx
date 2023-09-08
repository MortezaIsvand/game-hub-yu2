import GameGrid from "../components/GameGrid";
import GenreSelector from "../components/GenreSelector";
import GenresList from "../components/GenresList";
import Heading from "../components/Heading";
import PlatformSelector from "../components/PlatformSelector";
import SortOrderSelector from "../components/SortOrderSelector";

const HomePage = () => {
  return (
    <section className="bg-slate-50 px-2 flex flex-col gap-10 py-2">
      <main className="flex items-start gap-10">
        <GenresList />
        <div className="flex flex-col gap-2 max-sm:gap-4">
          <Heading />
          <div className="flex gap-8 flex-wrap max-sm:justify-center max-sm:gap-4">
            <GenreSelector />
            <PlatformSelector />
            <SortOrderSelector />
          </div>
          <GameGrid />
        </div>
      </main>
    </section>
  );
};
export default HomePage;
