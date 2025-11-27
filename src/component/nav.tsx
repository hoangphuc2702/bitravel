import React from "react";
import Link from "next/link";
import Image from "next/image";

// const Navigation = () => {
//   return (
//     <div>
//       <h1>This is Navigation</h1>
//     </div>
//   );
// }

// export default Navigation

const Navigation = () => {
  return (
    <section className="relative w-full h-[600px]">
      <Image 
        src="/hero.jpg" // bạn cần thay bằng đường dẫn ảnh hero
        alt="Travel Banner"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
          Find Your Best <br /> Travels Package
        </h1>
        <p className="text-white mb-6 max-w-xl">
          Planning for a trip? We will organize your trip with the best places and within best budget.
        </p>
        <Link href="/tours" className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200">
          VIEW ALL TOURS
        </Link>
      </div>
    </section>
  );
};

export default Navigation;
