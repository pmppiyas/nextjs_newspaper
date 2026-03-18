'use client';

import React from 'react';

interface IAction {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

interface ReusableHeaderProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  actions?: IAction[];
}

const ReusableHeader = ({
  icon,
  title,
  description,
  actions = [],
}: ReusableHeaderProps) => {
  return (
    <header className="container max-w-7xl mx-auto px-6 py-6 rounded-xl mb-6 border bg-card shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left Side */}
        <div className="flex items-start gap-4">
          {icon && (
            <div className="p-3 bg-primary text-primary-foreground rounded-xl">
              {icon}
            </div>
          )}

          <div>
            <h1 className="text-2xl font-bold text-foreground">{title}</h1>

            {description && (
              <p className="text-sm text-muted-foreground mt-1">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        {actions.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
              >
                {action.icon && <span>{action.icon}</span>}
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default ReusableHeader;
