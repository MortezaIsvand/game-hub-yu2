import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const { data: platforms, isLoading, error } = usePlatforms();
  if (isLoading) return null;
  if (error) throw error;
  return (
    <select
      onChange={(event) => setPlatformId(parseInt(event.target.value))}
      className="focus:outline-none shadow-2xl"
    >
      <option value="">--Select Platforms--</option>
      {platforms?.results.map((platform) => (
        <option key={platform.id} value={platform.id}>
          {platform.name}
        </option>
      ))}
    </select>
  );
};
export default PlatformSelector;
