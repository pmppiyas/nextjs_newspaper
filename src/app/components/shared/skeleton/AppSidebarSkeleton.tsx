'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import { Skeleton } from '@/components/ui/skeleton';

export function AppSidebarSkeleton() {
  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader className="py-4">
        <div className="flex items-center gap-3 px-4">
          <Skeleton className="h-8 w-8 rounded-lg shrink-0" />
          <Skeleton className="h-5 w-24" />
        </div>
      </SidebarHeader>

      <SidebarContent>
        {[1, 2].map((group) => (
          <SidebarGroup key={group} className="mb-4">
            <SidebarGroupLabel className="px-4 mb-2">
              <Skeleton className="h-2 w-20" />
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu className="px-2 space-y-2">
                {[1, 2, 3].map((item) => (
                  <SidebarMenuItem
                    key={item}
                    className="flex items-center gap-3 px-3 py-2"
                  >
                    <Skeleton className="h-5 w-5 rounded shrink-0" />
                    <Skeleton className="h-4 w-full max-w-30" />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="p-4 border-t">
        <div className="flex items-center gap-3 w-full">
          <Skeleton className="h-10 w-10 rounded-full shrink-0" />
          <div className="space-y-2 w-full">
            <Skeleton className="h-4 w-[70%]" />
            <Skeleton className="h-3 w-[50%]" />
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
