import { photos } from '@/assets/assets';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex  flex-col min-h-screen items-center ">
      <div className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 w-full md:px-8">
        {/* Left Column: Main + secondary news */}
        <div className="lg:col-span-8 flex flex-col gap-6 w-full">
          {/* Featured News */}
          <article className="relative rounded-lg overflow-hidden shadow-md h-80">
            <Image
              src={photos.ourPhoto}
              alt="Featured News"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/70 to-transparent p-4">
              <h1 className="text-2xl lg:text-4xl font-bold text-primary-foreground">
                জাতীয় সংবাদ: বড় ঘটনাপ্রবাহ
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                প্রকাশের তারিখ: 11 March 2026
              </p>
            </div>
          </article>

          {/* Secondary News Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <article className="relative flex flex-col gap-2 h-40 rounded overflow-hidden">
              <Image
                src={photos.ourPhoto}
                alt="News 1"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/40 to-transparent p-2">
                <h2 className="font-semibold text-lg hover:text-primary transition text-primary-foreground">
                  আন্তর্জাতিক সংবাদ: বিশ্ব নেতাদের সম্মেলন
                </h2>
              </div>
            </article>

            <article className="relative flex flex-col gap-2 h-40 rounded overflow-hidden">
              <Image
                src={photos.ourPhoto}
                alt="News 2"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/40 to-transparent p-2">
                <h2 className="font-semibold text-lg hover:text-primary transition text-primary-foreground">
                  খেলাধুলা: বাংলাদেশের জয়
                </h2>
              </div>
            </article>
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          {/* Latest News */}
          <div className="bg-card p-4 rounded shadow-sm">
            <h3 className="font-bold mb-3 text-lg">সর্বশেষ সংবাদ</h3>
            <ul className="flex flex-col gap-2">
              <li className="hover:text-primary cursor-pointer transition">
                নতুন নীতি প্রকাশ
              </li>
              <li className="hover:text-primary cursor-pointer transition">
                আন্তর্জাতিক সম্মেলন শুরু
              </li>
              <li className="hover:text-primary cursor-pointer transition">
                অর্থনীতি: বড় পরিবর্তন
              </li>
            </ul>
          </div>

          {/* Popular / Trending */}
          <div className="bg-card p-4 rounded shadow-sm">
            <h3 className="font-bold mb-3 text-lg">জনপ্রিয়</h3>
            <ul className="flex flex-col gap-2">
              <li className="hover:text-primary cursor-pointer transition">
                বিনোদন: নতুন সিনেমা মুক্তি
              </li>
              <li className="hover:text-primary cursor-pointer transition">
                খেলাধুলা: সুপার লীগ আপডেট
              </li>
              <li className="hover:text-primary cursor-pointer transition">
                ইসলামী বিশ্ব খবর
              </li>
            </ul>
          </div>

          {/* Ads or Social Widgets */}
          <div className="bg-card p-4 rounded shadow-sm text-center">
            <p className="text-sm text-muted-foreground">
              Advertisement / Widget
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
