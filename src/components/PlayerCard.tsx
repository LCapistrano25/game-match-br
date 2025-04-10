
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Gamepad } from "lucide-react";

interface PlayerCardProps {
  name: string;
  avatar: string;
  game?: string;
  isOnline: boolean;
}

const PlayerCard = ({ name, avatar, game, isOnline }: PlayerCardProps) => {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition cursor-pointer">
      <div className={isOnline ? "avatar-online" : ""}>
        <Avatar>
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-sm text-foreground">{name}</h3>
        {game && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Gamepad size={12} />
            <span className="truncate">{game}</span>
          </div>
        )}
      </div>
      {isOnline && <Badge className="bg-green-500/20 text-green-400 border-green-600 text-xs">Online</Badge>}
    </div>
  );
};

export default PlayerCard;
