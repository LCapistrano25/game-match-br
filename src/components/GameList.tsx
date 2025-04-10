
import GameCard from "./GameCard";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Game {
  id: string;
  title: string;
  image: string;
  isNew?: boolean;
  activePlayers: number;
}

interface GameListProps {
  title: string;
  games: Game[];
  seeAll?: boolean;
}

const GameList = ({ title, games, seeAll = false }: GameListProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold">{title}</h2>
        {seeAll && (
          <button className="text-primary text-sm font-medium">Ver todos</button>
        )}
      </div>
      <ScrollArea className="w-full whitespace-nowrap pb-4">
        <div className="flex space-x-4">
          {games.map((game) => (
            <div key={game.id} className="w-[150px] inline-block">
              <GameCard
                title={game.title}
                image={game.image}
                isNew={game.isNew}
                activePlayers={game.activePlayers}
              />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default GameList;
