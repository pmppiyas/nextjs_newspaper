const AsidePopulerNews = () => {
  return (
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
  );
};

export default AsidePopulerNews;
