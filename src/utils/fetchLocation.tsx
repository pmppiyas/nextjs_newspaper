export const fetchLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject('আপনার ব্রাউজার Geolocation সাপোর্ট করে না।');
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      (error) => {
        reject('লোকেশন পারমিশন পাওয়া যায়নি বা কোনো সমস্যা হয়েছে।');
      }
    );
  });
};

export const getAddressFromCoords = async ({
  lat,
  lon,
}: {
  lat: string;
  lon: string;
}) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    );
    const data = await response.json();
    return `${data.address.city || data.address.state}" " ${data.address.country}`;
  } catch (error) {
    console.error('ঠিকানা খুঁজে পাওয়া যায়নি', error);
  }
};
