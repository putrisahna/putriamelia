"use client";

import React, { useState } from "react";
import DrawerMenu from "./components/DrawerMenu";
import FavColor from "./components/FavColor";

export default function Page() {
  const [warna, setWarna] = useState("Light"); // State untuk tema

  return (
    <section
      className={`min-h-screen p-4 ${
        warna === "Dark"
          ? "bg-black text-white"  // Dark theme: black background, white text
          : warna === "Light"
          ? "bg-white text-black"  // Light theme: white background, black text
          : "bg-pink-300 text-black" // Pink theme: pink background, black text
      }`}
    >
      <DrawerMenu setWarna={setWarna} warna={warna} />
      <FavColor setWarna={setWarna} warna={warna} />
    </section>
  );
}
