import React from "react";

interface Hobby {
  id: number;
  name: string;
  image: string;
}

interface HobbiesProps {
  hobbies: Hobby[];
}

const Hobbies: React.FC<HobbiesProps> = ({ hobbies }) => {
  return (
    <div className="container mx-auto p-2 text-center">
      <h2 className="text-blue font-bold text-2xl mb-4">My Hobbies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {hobbies.map((hobby) => (
          <div key={hobby.id} className="border-2 border-indigo-400/75 rounded-lg bg-blue-300 p-2">
            {/* Gambar dengan border bulat */}
            <img
              src={hobby.image}
              alt={hobby.name}
              className="w-32 h-32 object-cover rounded-full mb-2 mx-auto" // menambahkan rounded-full untuk gambar berbentuk bulat
            />
            <h3 className="text-black font-semibold">{hobby.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
