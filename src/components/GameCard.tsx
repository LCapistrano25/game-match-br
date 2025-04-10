
import { Badge } from "@/components/ui/badge";
import { Gamepad, Users } from "lucide-react";

interface GameCardProps {
  title: string;
  image: string;
  isNew?: boolean;
  activePlayers: number;
}

const GameCard = ({ title, image, isNew = false, activePlayers }: GameCardProps) => {
  return (
    <div className="game-card">
      <div className="relative h-32 w-full">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        {isNew && (
          <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground font-medium">
            Novo
          </Badge>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-bold text-sm line-clamp-1">{title}</h3>
        <div className="flex items-center gap-2 mt-2 text-muted-foreground text-xs">
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{activePlayers}</span>
          </div>
          <div className="flex items-center gap-1">
            <Gamepad size={14} />
            <span>Jogar agora</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
