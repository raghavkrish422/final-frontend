import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface CreditCardDisplayProps {
  cardholderName?: string;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
}

const CreditCardDisplay = ({
  cardholderName = "James Jones",
  cardNumber = "3910291039368102",
  expiryDate = "12/28",
  cvv = "659",
}: CreditCardDisplayProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const formatCardNumber = (number: string) => {
    return number.match(/.{1,4}/g)?.join(" ") || "";
  };

  const maskCardNumber = (number: string) => {
    const lastFour = number.slice(-4);
    return `•••• •••• •••• ${lastFour}`;
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mb-6 flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent transition-colors"
      >
        {showDetails ? (
          <>
            <EyeOff className="w-4 h-4" />
            <span className="text-sm">Hide card number</span>
          </>
        ) : (
          <>
            <Eye className="w-4 h-4" />
            <span className="text-sm">Show card number</span>
          </>
        )}
      </button>

      <div className="relative w-[350px] h-[220px] rounded-2xl bg-gradient-to-br from-card-gradient-from to-card-gradient-to shadow-xl overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white"></div>
        </div>
        
        <div className="relative h-full flex flex-col justify-between p-6 text-white">
          <div>
            <h3 className="text-lg font-medium">{cardholderName}</h3>
          </div>
          
          <div className="space-y-4">
            <div className="text-xl tracking-wider font-mono">
              {showDetails ? formatCardNumber(cardNumber) : maskCardNumber(cardNumber)}
            </div>
            
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <div className="text-xs opacity-70">Exp {expiryDate}</div>
              </div>
              
              <div className="space-y-1">
                <div className="text-xs opacity-70">
                  CVV {showDetails ? cvv : "---"}
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white text-primary font-bold text-xl px-3 py-1 rounded">
                  VISA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardDisplay;
