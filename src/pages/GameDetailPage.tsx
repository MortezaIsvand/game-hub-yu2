import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game } = useGame(slug!);
  if (!game) return null;
  return (
    <div className="flex max-sm:flex-col items-start gap-8 px-4">
      <div className="max-w-lg flex flex-col gap-8 ">
        <div>
          <h1 className="font-bold text-3xl">{game?.name}</h1>
          <ExpandableText>{game.description_raw}</ExpandableText>
        </div>
        <GameAttributes game={game} />
      </div>
      <div className="flex flex-col gap-8">
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </div>
    </div>
  );
};
export default GameDetailPage;
