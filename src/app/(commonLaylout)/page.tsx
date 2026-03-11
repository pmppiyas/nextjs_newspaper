import Navbar from '@/app/components/shared/navbar/Navbar';

export default function Home() {
  return (
    <div className="flex  flex-col min-h-screen items-center ">
      <Navbar />
      <h1>Hello Newspaper</h1>
    </div>
  );
}
