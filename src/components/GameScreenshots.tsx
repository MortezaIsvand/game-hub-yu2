import useScreenshots from "../hooks/useScreenshots";
import getCroppedImageUrl from "../services/img-url";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data } = useScreenshots(gameId);
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {data?.results.map((screenshot) => (
        <img
          src={getCroppedImageUrl(screenshot.image)}
          alt="screenshots"
          key={screenshot.id}
          className="rounded-md"
        />
      ))}
    </div>
  );
};
export default GameScreenshots;
