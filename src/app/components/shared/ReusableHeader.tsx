'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Filter } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

interface IAction {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
}

interface ReusableHeaderProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  actions?: IAction[];
  currentStatus: string;
}

const ReusableHeader = ({
  icon,
  title,
  description,
  actions = [],
  currentStatus,
}: ReusableHeaderProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleFilter = (newStatus: string) => {
    if (newStatus === 'all') {
      router.push(pathname);
    } else {
      router.push(`${pathname}?status=${newStatus.toLowerCase()}`);
    }
  };

  const activeStatus = currentStatus?.toLowerCase() || 'all';

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

        <div className="flex gap-2 flex-wrap items-center md:justify-end md:ml-0">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant || 'default'}
              onClick={action.onClick}
              className="flex items-center gap-2 font-medium"
            >
              {action.icon && action.icon}
              {action.label}
            </Button>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 ">
                <Filter className="w-4 h-4" />
                ফিল্টার:
                {activeStatus.charAt(0).toUpperCase() + activeStatus.slice(1)}
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48 space-y-1">
              <DropdownMenuItem
                onClick={() => handleFilter('approved')}
                className={
                  activeStatus === 'approved'
                    ? 'bg-primary text-primary-foreground focus:bg-primary focus:text-primary-foreground font-medium'
                    : ''
                }
              >
                প্রকাশিত (Approved)
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => handleFilter('pending')}
                className={
                  activeStatus === 'pending'
                    ? 'bg-primary text-primary-foreground focus:bg-primary focus:text-primary-foreground font-medium'
                    : ''
                }
              >
                অপেক্ষমাণ (Pending)
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => handleFilter('rejected')}
                className={
                  activeStatus === 'rejected'
                    ? 'bg-primary text-primary-foreground focus:bg-primary focus:text-primary-foreground font-medium'
                    : ''
                }
              >
                বাতিলকৃত (Rejected)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default ReusableHeader;
