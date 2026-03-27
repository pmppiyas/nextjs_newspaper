import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Send,
} from 'lucide-react';
import { getAllCategories } from '@/services/category/get.allCategory';
import Logo from '@/app/components/shared/Logo';

const Footer = async () => {
  const { data: categories } = await getAllCategories();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* ১. ব্র্যান্ড এবং বর্ণনা */}
          <div className="space-y-6">
            <Logo />
            <p className="text-sm leading-relaxed text-slate-400">
              নির্ভরযোগ্য খবরের সন্ধানে আমরা ২৪ ঘণ্টা আপনার সাথে আছি।
              দেশ-বিদেশের সর্বশেষ সংবাদ এবং বিশ্লেষণ সবার আগে পেতে আমাদের সাথেই
              থাকুন।
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="p-2 bg-slate-800 hover:bg-primary hover:text-white rounded-full transition-all"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="p-2 bg-slate-800 hover:bg-primary hover:text-white rounded-full transition-all"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                className="p-2 bg-slate-800 hover:bg-primary hover:text-white rounded-full transition-all"
              >
                <Youtube size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-primary pl-3">
              বিভাগসমূহ
            </h3>
            <ul className="grid grid-cols-2 gap-3">
              {categories?.slice(0, 8).map((cat: any) => (
                <li key={cat.id}>
                  <Link
                    href={`/${cat.name}`}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ৩. যোগাযোগ তথ্য */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-primary pl-3">
              যোগাযোগ
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="text-primary w-5 h-5 shrink-0" />
                <span>মিরপুর-১০, ঢাকা-১২১৬, বাংলাদেশ</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="text-primary w-5 h-5 shrink-0" />
                <span>+৮৮০ ১২৩৪ ৫৬৭৮৯০</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="text-primary w-5 h-5 shrink-0" />
                <span>info@newsportal.com</span>
              </li>
            </ul>
          </div>

          {/* ৪. নিউজলেটার */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-primary pl-3">
              নিউজলেটার
            </h3>
            <p className="text-sm mb-4 text-slate-400">
              প্রতিদিনের প্রধান খবরের সারসংক্ষেপ পেতে সাবস্ক্রাইব করুন।
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="আপনার ইমেইল..."
                className="w-full bg-slate-800 border-none rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* নিচের কপিরাইট অংশ */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} নিউজপোর্টাল। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex gap-6 uppercase tracking-widest font-semibold">
            <Link href="/privacy" className="hover:text-white">
              প্রাইভেসি পলিসি
            </Link>
            <Link href="/terms" className="hover:text-white">
              শর্তাবলী
            </Link>
            <Link href="/contact" className="hover:text-white">
              যোগাযোগ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
