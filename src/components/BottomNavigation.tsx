
import { Home, Search, Bell, UserRound, Gamepad } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Search, label: "Explorar", path: "/explore" },
  { icon: Gamepad, label: "Jogos", path: "/games" },
  { icon: Bell, label: "Notificações", path: "/notifications" },
  { icon: UserRound, label: "Perfil", path: "/profile" },
];

const BottomNavigation = () => {
  // Current path would determine the active tab in a real app
  const currentPath = "/";
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border py-2 px-4">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <Link 
            key={item.label}
            to={item.path}
            className={cn(
              "flex flex-col items-center p-1",
              currentPath === item.path ? "text-primary" : "text-muted-foreground"
            )}
          >
            <item.icon size={20} />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
