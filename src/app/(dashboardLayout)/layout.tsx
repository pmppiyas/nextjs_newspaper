import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { IUser } from '@/interfaces/user.interface';
import { getMe } from '@/services/auth/getMe';
import { Suspense } from 'react'; // ১. ইমপোর্ট করুন

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();

  return (
    <SidebarProvider className="container max-w-7xl mx-auto">
      <Suspense fallback={<div>Loading Sidebar...</div>}>
        <AppSidebar user={(user as IUser) || undefined} />
      </Suspense>

      <SidebarInset>
        <Suspense fallback={<div className="h-16" />}>
          <SiteHeader />
        </Suspense>

        <main className="p-4 md:px-8 md:py-4 lg:px-12 lg:py-4">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
