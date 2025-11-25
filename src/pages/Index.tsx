import { useState } from "react";
import { Plus, CreditCard, Receipt, Gift, ChevronRight } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import CreditCardDisplay from "@/components/CreditCardDisplay";
import CardInfoBox from "@/components/CardInfoBox";
import CardActions from "@/components/CardActions";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeTab, setActiveTab] = useState("cards");
  const [cardType, setCardType] = useState("credit");
  
  const menuItems = [
    { icon: CreditCard, label: "Card details", color: "bg-blue-100 text-blue-600" },
    { icon: Receipt, label: "Recent transactions", color: "bg-blue-100 text-blue-600" },
    { icon: Gift, label: "Cardholder benefits", color: "bg-blue-100 text-blue-600" },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 overflow-y-auto">
        <div className="border-b border-border bg-card">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex gap-8">
              <button 
                onClick={() => setCardType("credit")}
                className={`text-sm font-medium pb-3 border-b-2 transition-colors ${
                  cardType === "credit" 
                    ? "border-primary text-primary" 
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                My credit cards
              </button>
              <button 
                onClick={() => setCardType("debit")}
                className={`text-sm font-medium pb-3 border-b-2 transition-colors ${
                  cardType === "debit" 
                    ? "border-primary text-primary" 
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                My debit cards
              </button>
              <button 
                onClick={() => setCardType("virtual")}
                className={`text-sm font-medium pb-3 border-b-2 transition-colors ${
                  cardType === "virtual" 
                    ? "border-primary text-primary" 
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                My virtual cards
              </button>
            </div>
            
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              New card
            </Button>
          </div>
        </div>

        <div className="p-8">
          <div className="flex gap-8 items-start">
            <div className="flex-1">
              <CreditCardDisplay />
            </div>
            
            <div className="w-80 space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  className="w-full flex items-center justify-between px-6 py-4 rounded-xl bg-card hover:bg-accent transition-colors group border border-border shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-primary">{item.label}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-muted-foreground transition-colors" />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-8">

          <div className="bg-info-box rounded-2xl p-6">
            <div className="flex gap-8">
              <CardInfoBox label="Available credit" value="$9,472.39" />
              <div className="w-px bg-border"></div>
              <CardInfoBox label="Current balance" value="$2,527.61" />
              <div className="w-px bg-border"></div>
              <CardInfoBox label="Balance due" value="6 Dec 2025" isDate />
            </div>
          </div>

          <div className="bg-info-box rounded-2xl p-8">
            <CardActions />
          </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
