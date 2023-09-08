import Game  from "../entities/Game";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <DefinitionItem term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <p>{platform.name}</p>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <p>{genre.name}</p>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">{game.metacritic}</DefinitionItem>
      <DefinitionItem term="Publisher">
        {game.publishers.map((publisher) => publisher.name)}
      </DefinitionItem>
    </div>
  );
};
export default GameAttributes;
