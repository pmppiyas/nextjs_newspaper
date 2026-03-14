import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider className="container max-w-7xl mx-auto">
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <main> {children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default layout;
