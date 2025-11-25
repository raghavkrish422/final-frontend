import { Snowflake, Gauge, RefreshCw, Trash2 } from "lucide-react";
import googlePayIcon from "@/assets/google-pay.png";

const CardActions = () => {
  const actions = [
    { icon: Snowflake, label: "Freeze card", color: "bg-action-button", isImage: false },
    { icon: Gauge, label: "Set spend limit", color: "bg-action-button", isImage: false },
    { icon: googlePayIcon, label: "Add to GPay", color: "bg-card", isImage: true },
    { icon: RefreshCw, label: "Replace card", color: "bg-action-button", isImage: false },
    { icon: Trash2, label: "Cancel card", color: "bg-action-button", isImage: false },
  ];

  return (
    <div className="flex justify-center gap-4">
      {actions.map((action) => (
        <button
          key={action.label}
          className="flex flex-col items-center gap-2 group"
        >
          <div
            className={`w-16 h-16 rounded-full ${action.color} flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-105`}
          >
            {action.isImage ? (
              <img src={action.icon as string} alt={action.label} className="w-8 h-8" />
            ) : (
              <action.icon className="w-6 h-6 text-white" />
            )}
          </div>
          <span className="text-xs text-center text-foreground max-w-[80px]">
            {action.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CardActions;
