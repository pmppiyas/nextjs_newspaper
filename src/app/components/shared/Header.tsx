

const Header = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center my-8">
      <div className="grow h-0.5 bg-gray-200 dark:bg-gray-800"></div>

      <h2 className="px-4 text-xl md:text-2xl font-bold text-primary whitespace-nowrap bg-background">
        {title}
      </h2>

      <div className="grow h-0.5 bg-gray-200 dark:bg-gray-800"></div>
    </div>
  );
};

export default Header;
