import { CreditCard, DollarSign, TrendingUp, User } from "lucide-react";
import logoImage from "@/assets/logo.png";

interface SidebarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const Sidebar = ({ activeTab = "cards", onTabChange }: SidebarProps) => {
  return (
    <aside className="w-52 bg-sidebar h-screen flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <img src={logoImage} alt="ITO HealthBase" className="w-full h-auto" />
      </div>
      
      <nav className="flex-1 flex flex-col justify-center py-6">
        <button
          onClick={() => onTabChange?.("cards")}
          className={`flex items-center gap-3 px-6 py-3 text-sidebar-foreground/70 hover:bg-sidebar-accent transition-colors ${
            activeTab === "cards" ? "bg-sidebar-accent text-sidebar-foreground" : ""
          }`}
        >
          <CreditCard className="w-5 h-5" />
          <span className="text-sm">Cards</span>
        </button>
        
        <button
          onClick={() => onTabChange?.("payments")}
          className={`flex items-center gap-3 px-6 py-3 text-sidebar-foreground/70 hover:bg-sidebar-accent transition-colors ${
            activeTab === "payments" ? "bg-sidebar-accent text-sidebar-foreground" : ""
          }`}
        >
          <DollarSign className="w-5 h-5" />
          <span className="text-sm">Payments</span>
        </button>
        
        <button
          onClick={() => onTabChange?.("credit")}
          className={`flex items-center gap-3 px-6 py-3 text-sidebar-foreground/70 hover:bg-sidebar-accent transition-colors ${
            activeTab === "credit" ? "bg-sidebar-accent text-sidebar-foreground" : ""
          }`}
        >
          <TrendingUp className="w-5 h-5" />
          <span className="text-sm">Credit</span>
        </button>
      </nav>
      
      <div className="p-4">
        <button className="w-full flex items-center gap-3 px-4 py-3 bg-card text-foreground rounded-lg hover:bg-card/80 transition-colors">
          <User className="w-5 h-5" />
          <span className="text-sm">Profile</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
