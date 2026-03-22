'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Edit, Eye, MoreHorizontal, Trash } from 'lucide-react';
import React, { useEffect } from 'react';
import Empty from '@/app/components/shared/dashboard/Empty';
import { IManagementTableProps } from '@/interfaces/dashboard.interface';

function ManagementTable<T>({
  data = [],
  columns = [],
  onView,
  onEdit,
  onDelete,
  getRowKey,
  isAdmin = false,
}: IManagementTableProps<T>) {
  useEffect(() => {}, [data, columns]);

  const handleAction = (type: 'VIEW' | 'EDIT' | 'DELETE', item: T) => {
    if (type === 'VIEW' && onView) onView(item);
    if (type === 'EDIT' && onEdit) onEdit(item);
    if (type === 'DELETE' && onDelete) onDelete(item);
  };

  if (data.length === 0) {
    return (
      <div className="w-full flex items-center justify-center border border-dashed rounded-lg p-10 max-w-7xl mx-auto bg-muted/20">
        <Empty />
      </div>
    );
  }

  return (
    <div className="w-full min-h-100 overflow-hidden border border-border rounded-xl max-w-7xl mx-auto bg-card shadow-sm">
      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader className="bg-muted/50 border-b">
            <TableRow>
              {columns.map((column, colIdx) => (
                <TableHead
                  key={colIdx}
                  className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground text-center whitespace-nowrap"
                >
                  {column.header}
                </TableHead>
              ))}
              {(isAdmin || onView) && (
                <TableHead className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground text-center">
                  Actions
                </TableHead>
              )}
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((item) => (
              <TableRow
                key={getRowKey(item)}
                className="hover:bg-muted/30 transition-colors border-b last:border-0"
              >
                {columns.map((col, idx) => (
                  <TableCell
                    key={idx}
                    className={`px-6 py-4 text-sm text-foreground/80 text-center ${col.className || ''}`}
                  >
                    {typeof col.accessor === 'function'
                      ? col.accessor(item)
                      : (item[col.accessor] as React.ReactNode)}
                  </TableCell>
                ))}

                {(isAdmin || onView) && (
                  <TableCell className="px-6 py-4 text-center">
                    {isAdmin ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-40">
                          {onView && (
                            <DropdownMenuItem
                              onClick={() => handleAction('VIEW', item)}
                            >
                              <Eye className="mr-2 h-4 w-4 text-blue-500" />
                              View Details
                            </DropdownMenuItem>
                          )}
                          {onEdit && (
                            <DropdownMenuItem
                              onClick={() => handleAction('EDIT', item)}
                            >
                              <Edit className="mr-2 h-4 w-4 text-amber-500" />
                              Edit Item
                            </DropdownMenuItem>
                          )}
                          {onDelete && (
                            <DropdownMenuItem
                              onClick={() => handleAction('DELETE', item)}
                              className="text-destructive focus:bg-destructive focus:text-destructive-foreground"
                            >
                              <Trash className="mr-2 h-4 w-4" />
                              Delete Item
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      onView && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 gap-1.5 font-medium"
                          onClick={() => handleAction('VIEW', item)}
                        >
                          <Eye className="h-3.5 w-3.5" />
                          View
                        </Button>
                      )
                    )}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default ManagementTable;
