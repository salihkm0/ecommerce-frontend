import React from 'react';
import { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { StyledContainer } from '../styles/ContainerStyle';

const dummyProduct = {
  name: "Men's Winter Jacket",
  price: '$99',
  description: 'Revamp your style with the latest designer trends in men\'s clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces.',
  seller: 'MyBabe',
  images: [
    'https://via.placeholder.com/400',
    'https://via.placeholder.com/400',
    'https://via.placeholder.com/400',
    'https://via.placeholder.com/400',
  ],
  reviews: [
    { id: 1, user: 'Ryan M', comment: 'Amazing and durable jacket...', rating: 5, date: 'October 24, 2020' },
    { id: 2, user: 'Ryan M', comment: 'Amazing and durable jacket...', rating: 3, date: 'October 24, 2020' },
  ],
};

export const SingleProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(dummyProduct.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('M');

  return (
    <StyledContainer>
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col space-y-4">
            <img src={selectedImage} alt={dummyProduct.name} className="w-full h-auto object-cover" />
            <div className="flex space-x-2">
              {dummyProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={dummyProduct.name}
                  className={`w-16 h-16 object-cover cursor-pointer ${selectedImage === image ? 'border-2 border-gray-900' : ''}`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-3xl font-bold mb-2">{dummyProduct.name}</h1>
          <p className="text-lg mb-4">{dummyProduct.description}</p>
          <p className="text-sm mb-2">Seller: {dummyProduct.seller}</p>
          <div className="flex items-center mb-4">
            <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="px-2 py-1 bg-gray-200">-</button>
            <span className="px-4">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="px-2 py-1 bg-gray-200">+</button>
            <select value={size} onChange={(e) => setSize(e.target.value)} className="ml-4 border p-2">
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <p className="text-2xl font-bold mb-4">{dummyProduct.price}</p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-black text-white">Add to Cart</button>
            <button className="px-4 py-2 bg-blue-600 text-white">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Best Selling</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {dummyProduct.images.map((image, index) => (
            <img key={index} src={image} alt={`Best Selling ${index}`} className="w-48 h-48 object-cover" />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        <div className="flex flex-col space-y-4">
          {dummyProduct.reviews.map(review => (
            <div key={review.id} className="border p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{review.user}</span>
                <span className="text-sm">{review.date}</span>
              </div>
              <p className="mb-2">{review.comment}</p>
              <div className="flex">
                {Array(review.rating).fill().map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
                {Array(5 - review.rating).fill().map((_, i) => (
                  <span key={i} className="text-gray-300">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </StyledContainer>
  );
};
