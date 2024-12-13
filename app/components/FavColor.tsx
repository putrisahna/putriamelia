"use client";

import React from "react";

interface FavColorProps {
  setWarna: (warna: string) => void; // Tipe untuk setWarna
  warna: string; // Tipe untuk warna tema
}

const FavColor: React.FC<FavColorProps> = ({ setWarna, warna }) => {
  return (
    <div className="container mx-auto p-4 text-center pt-20">
      {/* Dynamic font color based on the current theme */}
      <h2
        className={`font-bold text-2xl mb-6 ${
          warna === "Dark" ? "text-white" : "text-black"
        }`}
      >
        Tema
      </h2>

      <div className="space-x-4">
        <button
          className="w-full sm:w-auto bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setWarna("Dark")}
        >
          Dark
        </button>

        <button
          className="w-full sm:w-auto bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded"
          onClick={() => setWarna("Light")}
        >
          Light
        </button>

        <button
          className="w-full sm:w-auto bg-pink-300 hover:bg-pink-500 text-black font-bold py-2 px-4 rounded"
          onClick={() => setWarna("Pink")}
        >
          Pink
        </button>
      </div>
    </div>
  );
};

export default FavColor;
