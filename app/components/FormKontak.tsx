"use client";

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    rating: 0, // Menyimpan rating
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ratings, setRatings] = useState<number[]>([]); // Menyimpan semua rating

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleStarClick = (starIndex: number) => {
    setFormData(prevData => ({
      ...prevData,
      rating: starIndex + 1 // Update rating ke index + 1
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Menyimpan rating ke dalam array ratings
    setRatings(prevRatings => [...prevRatings, formData.rating]);
  };

  const handleClear = () => {
    setFormData({
      name: '',
      message: '',
      rating: 0,
    });
  };

  // Hitung rata-rata rating
  const averageRating = ratings.length > 0 
    ? (ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length).toFixed(1) 
    : 0;

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh' // membuat konten berada di tengah secara vertikal dan horizontal
    }}>
      {isSubmitted ? (
        <div style={{ color: 'blue' }}> {/* warna teks hitam */}
          <h2>Nama: {formData.name}</h2>
          <p>Komentar: {formData.message}</p>
          <p>Rating: {formData.rating} bintang</p>
          <p>Komentar berhasil terkirim. Terimakasih!</p>
          <p>Rata-rata Rating: {averageRating} bintang</p>
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}> {/* Memusatkan konten */}
          <h2 className="text-black font-bold text-2xl mb-4">Contact Form</h2> {/* Judul di luar form */}
          <form 
            onSubmit={handleSubmit} 
            className="flex flex-col gap-4 w-80 p-6 border border-gray-300 rounded-lg bg-blue-300 text-black"
          >
            <div>
              <label htmlFor="name" className="text-black">Nama:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-2 mt-2"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-white">Komentar:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full p-2 mt-2"
              />
            </div>

            <div>
              <label className="text-white">Rating:</label>
              <div className="flex justify-center my-3">
                {[...Array(5)].map((_, index) => (
                  <span 
                    key={index} 
                    onClick={() => handleStarClick(index)} 
                    className="cursor-pointer text-xl"
                    style={{
                      color: index < formData.rating ? 'gold' : 'white',
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button type="submit" className="px-4 py-2">Submit</button>
              <button type="button" onClick={handleClear} className="px-4 py-2">Clear</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
