import { Link } from "react-router-dom";
import Game from "../entities/Game";
import getCroppedImageUrl from "../services/img-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIcon from "./PlatformIcon";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <article className="flex flex-col shadow-2xl rounded-md overflow-hidden">
      <Link to={"/games/" + game.slug}>
        <img
          src={getCroppedImageUrl(game.background_image)}
          alt="game-img"
          className="object-cover"
        />
      </Link>
      <div className="p-2 flex flex-col gap-2">
        <Link to={"/games/" + game.slug} className="text-3xl font-bold ">
          {game.name}
        </Link>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            {game.parent_platforms.map(({ platform }) => (
              <PlatformIcon key={platform.id} platform={platform} />
            ))}
          </div>
          <CriticScore score={game.metacritic} />
        </div>
        <Emoji rating={game.rating_top} />
      </div>
    </article>
  );
};
export default GameCard;
