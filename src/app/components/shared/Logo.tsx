import { photos } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="block">
      <div className="relative w-40 h-12 ">
        <Image
          src={photos.logo}
          alt="নিউজপোর্টাল লোগো"
          fill
          priority
          className="object-contain object-left"
        />
      </div>
    </Link>
  );
};

export default Logo;
