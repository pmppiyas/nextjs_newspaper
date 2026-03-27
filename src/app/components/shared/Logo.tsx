import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-2xl font-black text-foreground tracking-tighter"
    >
      নিউজ<span className="text-primary">পোর্টাল</span>
    </Link>
  );
};

export default Logo;
