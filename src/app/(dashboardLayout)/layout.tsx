import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { IUser, IUserInfo } from '@/interfaces/user.interface';
import { getMe } from '@/services/auth/getMe';


const layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();

  return (
    <SidebarProvider className="container max-w-7xl mx-auto">
      <AppSidebar user={(user as IUser) || undefined} />
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
