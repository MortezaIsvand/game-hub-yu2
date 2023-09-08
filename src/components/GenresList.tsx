import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/img-url";
import useGameQueryStore from "../store";

const GenresList = () => {
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const { data, isLoading, error } = useGenres();
  if (isLoading) return null;
  if (error) throw error;
  return (
    <div className="flex flex-col gap-4 max-sm:hidden">
      {data?.results.map((genre) => (
        <button
          className="flex gap-2 items-center text-left"
          key={genre.id}
          onClick={() => setGenreId(genre.id)}
        >
          <img
            width={50}
            src={getCroppedImageUrl(genre.image_background)}
            alt="genre"
            className="rounded-md"
          />
          <p
            className={`hover:underline ${
              genre.id === gameQuery.genreId ? "font-bold" : "font-normal"
            }`}
          >
            {genre.name}
          </p>
        </button>
      ))}
    </div>
  );
};
export default GenresList;
