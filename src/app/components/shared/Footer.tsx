import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Send,
} from 'lucide-react';
import { getAllCategories } from '@/services/category/get.allCategory';
import Logo from '@/app/components/shared/Logo';
import { ICategory } from '@/interfaces/news.Interface';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = async () => {
  const { categories } = await getAllCategories();

  return (
    <footer className="w-full bg-background text-foreground border-t">
      <div className="container mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* ১. লোগো এবং বর্ণনা */}
          <div className="space-y-6">
            <Logo />
            <p className="text-sm leading-relaxed text-muted-foreground">
              নির্ভরযোগ্য খবরের সন্ধানে আমরা ২৪ ঘণ্টা আপনার সাথে আছি।
              দেশ-বিদেশের সর্বশেষ সংবাদ এবং বিশ্লেষণ সবার আগে পেতে আমাদের সাথেই
              থাকুন।
            </p>
            <div className="flex gap-3">
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook size={18} />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter size={18} />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full hover:bg-primary hover:text-primary-foreground"
              >
                <Youtube size={18} />
              </Button>
            </div>
          </div>

          {/* ২. বিভাগসমূহ */}
          <div>
            <h3 className="font-bold text-lg mb-6 border-l-4 border-primary pl-3">
              বিভাগসমূহ
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {categories?.slice(0, 8).map((cat: ICategory) => (
                <li key={cat.id}>
                  <Link
                    href={`/category/${cat.id}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2 group-hover:bg-primary transition-all" />
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ৩. যোগাযোগ তথ্য */}
          <div>
            <h3 className="font-bold text-lg mb-6 border-l-4 border-primary pl-3">
              যোগাযোগ
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="text-primary w-5 h-5 shrink-0" />
                <span>মিরপুর-১০, ঢাকা-১২১৬, বাংলাদেশ</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="text-primary w-5 h-5 shrink-0" />
                <span>+৮৮০ ১২৩৪ ৫৬৭৮৯০</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="text-primary w-5 h-5 shrink-0" />
                <span>info@newsportal.com</span>
              </li>
            </ul>
          </div>

          {/* ৪. নিউজলেটার */}
          <div>
            <h3 className="font-bold text-lg mb-6 border-l-4 border-primary pl-3">
              নিউজলেটার
            </h3>
            <p className="text-sm mb-4 text-muted-foreground">
              প্রতিদিনের প্রধান খবরের সারসংক্ষেপ পেতে সাবস্ক্রাইব করুন।
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="ইমেইল..."
                className="bg-muted border-none focus-visible:ring-primary"
              />
              <Button size="icon" className="shrink-0">
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* নিচের কপিরাইট অংশ */}
        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} নিউজপোর্টাল। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex gap-6 font-medium">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              প্রাইভেসি পলিসি
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              শর্তাবলী
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
            >
              যোগাযোগ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
