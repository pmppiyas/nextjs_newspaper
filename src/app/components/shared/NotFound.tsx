import Link from 'next/link';
import { FileQuestion, Home, ArrowLeft, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center  px-6 text-center  py-16">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
        <FileQuestion className="w-24 h-24 text-primary relative animate-bounce" />
      </div>

      <h1 className="text-6xl font-extrabold text-primary mb-2">৪০৪</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        দুঃখিত! এই পেজটি খুঁজে পাওয়া যায়নি
      </h2>
      <p className="text-muted-foreground max-w-md mb-8">
        আপনি যে ক্যাটাগরি বা নিউজটি খুঁজছেন, তা হয়তো সরিয়ে ফেলা হয়েছে অথবা
        ইউআরএল (URL) টি ভুল। দয়া করে আবার চেষ্টা করুন।
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild variant="default" size="lg" className="gap-2">
          <Link href="/">
            <Home className="w-4 h-4" />
            হোম পেজে ফিরে যান
          </Link>
        </Button>

        <Button asChild variant="outline" size="lg" className="gap-2">
          <Link href="/news">
            <Newspaper className="w-4 h-4" />
            সর্বশেষ খবর দেখুন
          </Link>
        </Button>
      </div>

      <div className="mt-12 pt-8 border-t w-full max-w-xs">
        <p className="text-sm text-muted-foreground mb-4">
          আপনার কি কোনো সাহায্য প্রয়োজন?
        </p>
        <Link
          href="/contact"
          className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
        >
          আমাদের সাথে যোগাযোগ করুন <ArrowLeft className="w-3 h-3 rotate-180" />
        </Link>
      </div>
    </div>
  );
}
