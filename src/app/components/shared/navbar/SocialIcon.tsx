import Link from 'next/link';
import { Facebook, Twitter, Youtube } from 'lucide-react';

const SocialIcon = () => {
  return (
    <div>
      <div className="flex items-center  justify-center  gap-4">
        <Link href="#" className="hover:text-blue-600">
          <Facebook size={18} />
        </Link>

        <a href="#" className="hover:text-sky-500">
          <Twitter size={18} />
        </a>

        <a href="#" className="hover:text-red-600">
          <Youtube size={18} />
        </a>
      </div>
    </div>
  );
};

export default SocialIcon;
