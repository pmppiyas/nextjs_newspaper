export function banglaDayFormatter(date: string) {
  return new Date(date).toLocaleDateString('bn-BD', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function getBanglaDate() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  let banglaYear = year - 593;
  const banglaDay = day;

  if (month < 4 || (month === 4 && day < 14)) {
    banglaYear -= 1;
  }

  const monthNames = [
    'বৈশাখ',
    'জ্যৈষ্ঠ',
    'আষাঢ়',
    'শ্রাবণ',
    'ভাদ্র',
    'আশ্বিন',
    'কার্তিক',
    'অগ্রহায়ণ',
    'পৌষ',
    'মাঘ',
    'ফাল্গুন',
    'চৈত্র',
  ];

  const getBanglaMonthIndex = (m: number, d: number) => {
    if (m === 4 && d >= 14) return 0;
    if (m === 5 && d >= 15) return 1;
    if (m === 6 && d >= 16) return 2;
    if (m === 7 && d >= 17) return 3;
    if (m === 8 && d >= 17) return 4;
    if (m === 9 && d >= 17) return 5;
    if (m === 10 && d >= 17) return 6;
    if (m === 11 && d >= 16) return 7;
    if (m === 12 && d >= 16) return 8;
    if (m === 1 && d >= 15) return 9;
    if (m === 2 && d >= 14) return 10;
    if (m === 3 && d >= 15) return 11;
    return (m + 7) % 12;
  };

  const monthIndex = getBanglaMonthIndex(month, day);

  const englishToBanglaNumber = (num: number) => {
    return num.toString().replace(/\d/g, (d) => '০১২৩৪৫৬৭৮৯'[parseInt(d)]);
  };

  return {
    day: englishToBanglaNumber(banglaDay),
    month: monthNames[monthIndex],
    year: englishToBanglaNumber(banglaYear),
    fullDate: `${englishToBanglaNumber(banglaDay)} ${monthNames[monthIndex]}, ${englishToBanglaNumber(banglaYear)} বঙ্গাব্দ`,
  };
}
