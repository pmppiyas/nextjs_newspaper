import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { getUserInfo } from '@/services/auth/userInfo';
import { IRole } from '@/types/auth';

const layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUserInfo();

  return (
    <SidebarProvider className="container max-w-7xl mx-auto">
      <AppSidebar role={user?.role as IRole | undefined} />
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
