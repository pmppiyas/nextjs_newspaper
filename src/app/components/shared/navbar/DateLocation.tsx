'use client';

import { getBanglaDate } from '@/utils/formatter';
import { Calendar, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

const DateLocation = () => {
  const [location, setLocation] = useState<string>('ঢাকা, বাংলাদেশ');

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=bn`
          );
          const data = await res.json();
          const city = `${data.address.city || data.address.town || data.address.state}, ${
            data.address.country
          }`;

          setLocation(city || 'ঢাকা, বাংলাদেশ');
        },
        () => {
          setLocation('ঢাকা');
        }
      );
    }
  }, []);

  const banglaDate = getBanglaDate();

  return (
    <div className=" flex items-center  justify-center gap-4">
      <div className="flex items-center justify-center gap-1 text-sm ">
        <Calendar size={16} />
        <span>{banglaDate.fullDate}</span>
      </div>

      <div className="flex items-center justify-center gap-1 text-sm ">
        <MapPin size={16} />
        <span>{location}</span>
      </div>
    </div>
  );
};

export default DateLocation;
