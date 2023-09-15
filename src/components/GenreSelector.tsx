import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";

const GenreSelector = () => {
  const { data: genres, isLoading, error } = useGenres();
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  if (error) throw error;
  if (isLoading) return null;
  return (
    <select
      onChange={(event) => setGenreId(parseInt(event.target.value))}
      className="focus:outline-none shadow-2xl sm:hidden"
    >
      <option value="">--Select Genre--</option>
      {genres?.results.map((genre) => (
        <option value={genre.id} key={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
};
export default GenreSelector;
