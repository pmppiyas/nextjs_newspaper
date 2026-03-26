'use client';

import { Newspaper, RefreshCcw, LucideIcon } from 'lucide-react';
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
  icon: Icon = Newspaper,
}: EmptyProps) => {
  return (
    <div className="col-span-full py-16 px-6 flex flex-col items-center justify-center border-2 border-dashed rounded-[2rem] bg-muted/5 border-muted/20 animate-in fade-in zoom-in-95 duration-700 w-full">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full animate-pulse" />
        <div className="relative p-6 bg-background border shadow-sm rounded-3xl">
          <Icon size={54} className="text-primary/40" />
        </div>
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
        {subject ? `${subject} পাওয়া যায়নি!` : 'কোনো তথ্য পাওয়া যায়নি!'}
      </h3>

      <p className="text-sm md:text-base text-muted-foreground/70 max-w-sm text-center mt-3 leading-relaxed">
        {description ??
          'দুঃখিত, এই মুহূর্তে এই ক্যাটাগরিতে কোনো সংবাদ নেই। নতুন খবরের জন্য আমাদের সাথেই থাকুন।'}
      </p>

      {refreshButton ? (
        <div className="mt-8">{refreshButton}</div>
      ) : (
        <button
          onClick={() => window.location.reload()}
          className="mt-8 flex items-center gap-2 px-5 py-2.5 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full text-sm font-medium transition-all active:scale-95"
        >
          <RefreshCcw size={16} />
          আবার চেষ্টা করুন
        </button>
      )}
    </div>
  );
};

export default Empty;
