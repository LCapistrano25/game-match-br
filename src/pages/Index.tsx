
import { useState } from "react";
import QuickMatchButton from "@/components/QuickMatchButton";
import GameList from "@/components/GameList";
import PlayerCard from "@/components/PlayerCard";
import BottomNavigation from "@/components/BottomNavigation";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  // Sample data
  const [trendingGames] = useState([
    { 
      id: "1", 
      title: "R.E.P.O", 
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=500", 
      isNew: true, 
      activePlayers: 1243 
    },
    { 
      id: "2", 
      title: "Cyber Legends", 
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=500", 
      isNew: false, 
      activePlayers: 876 
    },
    { 
      id: "3", 
      title: "Neon Hunters", 
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=500", 
      isNew: true, 
      activePlayers: 531 
    },
    { 
      id: "4", 
      title: "Forest Escape", 
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=500", 
      isNew: false, 
      activePlayers: 329 
    },
  ]);

  const [recentlyPlayedGames] = useState([
    { 
      id: "5", 
      title: "Battle Royale Masters", 
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=500", 
      isNew: false, 
      activePlayers: 982 
    },
    { 
      id: "6", 
      title: "Racing Rivals", 
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=500", 
      isNew: false, 
      activePlayers: 467 
    },
    { 
      id: "7", 
      title: "Tactical Forces", 
      image: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?q=80&w=500", 
      isNew: false, 
      activePlayers: 753 
    },
  ]);

  const [onlineFriends] = useState([
    { id: "1", name: "Carlos Silva", avatar: "https://i.pravatar.cc/150?img=1", game: "R.E.P.O", isOnline: true },
    { id: "2", name: "Marina Oliveira", avatar: "https://i.pravatar.cc/150?img=5", game: "Cyber Legends", isOnline: true },
    { id: "3", name: "Roberto Almeida", avatar: "https://i.pravatar.cc/150?img=3", isOnline: true },
  ]);

  return (
    <div className="pb-20 max-w-lg mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-border">
        <div>
          <h1 className="text-2xl font-bold text-glow">Game Match</h1>
          <p className="text-muted-foreground text-sm">Olá, Silvano!</p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Search size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell size={20} />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 pt-6">
        {/* Quick Match Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-3">Encontre jogadores rapidamente</h2>
          <div className="mb-4">
            <QuickMatchButton />
          </div>
          <div className="relative">
            <Input 
              placeholder="Qual jogo você está procurando?" 
              className="bg-secondary pr-10"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          </div>
        </div>

        {/* Trending Games Section */}
        <GameList 
          title="Jogos em Alta" 
          games={trendingGames} 
          seeAll={true}
        />

        {/* Recently Played Games */}
        <GameList 
          title="Jogados Recentemente" 
          games={recentlyPlayedGames} 
          seeAll={true}
        />

        {/* Online Friends Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold">Amigos Online</h2>
            <button className="text-primary text-sm font-medium">Ver todos</button>
          </div>
          <div className="space-y-2">
            {onlineFriends.map((friend) => (
              <PlayerCard
                key={friend.id}
                name={friend.name}
                avatar={friend.avatar}
                game={friend.game}
                isOnline={friend.isOnline}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Index;
