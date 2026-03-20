'use client';

import * as React from 'react';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

import Logo from '@/app/components/shared/Logo';
import { getRoutesByRole } from '@/routes/routes';
import NavLinkClient from '@/components/navlink-client';
import { IRole } from '@/types/auth';

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  role: IRole | undefined;
}

export function AppSidebar({ role, ...props }: AppSidebarProps) {
  const roleWiseNavs = getRoutesByRole(role || 'READER');

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <Logo />
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {roleWiseNavs.map((section, idx) => (
          <SidebarGroup key={idx} className="mb-4 last:mb-0">
            {section.title && (
              <SidebarGroupLabel className="px-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mb-2">
                {section.title}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu className="px-2 space-y-1">
                {section.nav.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <NavLinkClient
                      href={item.href}
                      title={item.title}
                      iconName={item.iconName || ''}
                    />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: 'Your Name',
            email: 'user@example.com',
            avatar: '/avatars/default.jpg',
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
