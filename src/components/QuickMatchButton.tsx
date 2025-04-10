
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const QuickMatchButton = () => {
  const { toast } = useToast();
  
  const handleQuickMatch = () => {
    toast({
      title: "Encontrando jogadores...",
      description: "Procurando jogadores com interesses similares",
      variant: "default",
    });
  };
  
  return (
    <Button 
      onClick={handleQuickMatch}
      className="w-full bg-gradient-to-r from-accent to-primary hover:opacity-90 animate-pulse-glow text-primary-foreground font-bold"
    >
      <Zap className="mr-2" size={18} />
      Quick Match
    </Button>
  );
};

export default QuickMatchButton;
