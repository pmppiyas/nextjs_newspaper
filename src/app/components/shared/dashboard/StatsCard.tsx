export const StatsCard = ({
  label,
  value,
  icon,
  color,
}: {
  label: string;
  value: number | string;
  icon: React.ReactNode;
  color: string;
}) => (
  <div className="bg-background border rounded-xl p-5 flex items-center gap-4">
    <div className={`p-3 rounded-lg ${color}`}>{icon}</div>
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <h3 className="text-2xl font-bold">{value}</h3>
    </div>
  </div>
);
