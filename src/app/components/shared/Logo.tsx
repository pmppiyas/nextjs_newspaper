import Link from 'next/link';

const Logo = () => {
  return (
    <div className="mx-auto text-3xl font-medium cursor-pointer">
      <Link href="/">NewsPaper</Link>
    </div>
  );
};

export default Logo;
