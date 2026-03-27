'use client';

import React from 'react';
import Link from 'next/link';

const headlines: { text: string; href?: string }[] = [
  { text: 'জাতীয় সংবাদ: নতুন নীতি প্রকাশ', href: '/' },
  { text: 'আন্তর্জাতিক: বিশ্ব নেতাদের সম্মেলন', href: '/' },
  { text: 'খেলাধুলা: বাংলাদেশের জয়', href: '/' },
  { text: 'বিনোদন: নতুন সিনেমা মুক্তি', href: '/' },
  { text: 'অর্থনীতি: বাজারে বড় পরিবর্তন', href: '/' },
];

const HeadlineTicker: React.FC = () => {
  const tickerItems = [...headlines, ...headlines];

  return (
    <>
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: inline-flex;
          animation: ticker 20s linear infinite;
          white-space: nowrap;
          will-change: transform;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto overflow-hidden border-t border-b border-border bg-background text-foreground mt-6 ">
        <div className="flex items-center  px-4 *:py-2">
          <span className="font-semibold text-primary mr-4 shrink-0 ">
            ব্রেকিং শিরোনাম
          </span>

          <div className="relative flex-1 overflow-hidden bg-red-200">
            <div className="ticker-track">
              {tickerItems.map((headline, idx) => (
                <Link
                  key={idx}
                  href={headline.href || '/'}
                  className="mx-8 inline-block hover:text-primary transition-colors"
                >
                  {headline.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadlineTicker;
