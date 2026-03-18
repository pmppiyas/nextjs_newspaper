import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider className="container max-w-7xl mx-auto">
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <main className="p-4 md:px-8 md:py-4 lg:px-12 lg:py-4">
          {' '}
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default layout;
