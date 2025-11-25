interface CardInfoBoxProps {
  label: string;
  value: string;
  isDate?: boolean;
}

const CardInfoBox = ({ label, value, isDate = false }: CardInfoBoxProps) => {
  return (
    <div className="flex-1 text-center">
      <div className="text-sm text-muted-foreground mb-2">{label}</div>
      <div className={`font-semibold ${isDate ? "text-2xl" : "text-3xl"} text-primary`}>
        {value}
      </div>
    </div>
  );
};

export default CardInfoBox;
