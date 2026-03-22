import { CalendarDays, LucideIcon } from 'lucide-react';
import React from 'react';

interface EmptyProps {
  subject?: string;
  description?: string;
  refreshButton?: React.ReactNode;
  icon?: LucideIcon;
}

const Empty = ({
  subject,
  description,
  refreshButton,
  icon: Icon = CalendarDays,
}: EmptyProps) => {
  return (
    <div className="col-span-full py-20 flex flex-col items-center justify-center border-2 border-dashed rounded-3xl bg-muted/10 animate-in fade-in duration-500 w-full">
      <div className="p-5 bg-muted/20 rounded-full mb-4">
        <Icon size={48} className="text-muted-foreground/30" />
      </div>

      <h3 className="text-lg font-bold text-muted-foreground">
        No {subject ?? 'records'} available!
      </h3>

      <p className="text-sm text-muted-foreground/60 max-w-xs text-center mt-1">
        {description ??
          'There are no records found for this specific selection. Enjoy your time off!'}
      </p>

      {refreshButton && <div className="mt-6">{refreshButton}</div>}
    </div>
  );
};

export default Empty;
