const AsideLatestNews = () => {
  return (
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
  );
};

export default AsideLatestNews;
