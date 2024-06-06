import React, { useState } from 'react';
import axios from 'axios';

export const AddProduct = () => {
    const [product, setProduct] = useState({
        sku: '',
        title: '',
        slug: '',
        price: '',
        description: '',
        brand: '',
        sizes: '',
        offer: '',
        category: '',
        subCategory: '',
        subSubCategory: '',
        seller: '',
        images: [],
      });
    
      const [imageFiles, setImageFiles] = useState([]);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
      };
    
      const handleImageChange = (e) => {
        setImageFiles([...e.target.files]);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        toast.success("Product Saved")
        // const formData = new FormData();
        // for (const key in product) {
        //   formData.append(key, product[key]);
        // }
        // imageFiles.forEach((file) => {
        //   formData.append('images', file);
        // });
    
        // try {
        //   const response = await axios.post('/api/v1/products', formData, {
        //     headers: {
        //       'Content-Type': 'multipart/form-data',
        //     },
        //   });
        //   console.log(response.data);
        //   alert('Product added successfully');
        // } catch (error) {
        //   console.error(error);
        //   alert('Error adding product');
        // }
      };
    
      return (
        <div className="max-w-2xl mx-auto mt-10">
          <h1 className="text-2xl font-semibold mb-6">Add Product</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="sku" className="block text-sm font-medium text-gray-700">SKU</label>
              <input
                type="text"
                name="sku"
                id="sku"
                value={product.sku}
                // onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={product.title}
                // onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label htmlFor="slug" className="block text-sm font-medium text-gray-700">Slug</label>
              <input
                type="text"
                name="slug"
                id="slug"
                value={product.slug}
                // onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="number"
                name="price"
                id="price"
                value={product.price}
                // onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                id="description"
                value={product.description}
                // onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand</label>
              <input
                type="text"
                name="brand"
                id="brand"
                value={product.brand}
                // onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label htmlFor="sizes" className="block text-sm font-medium text-gray-700">Sizes</label>
              <input
                type="text"
                name="sizes"
                id="sizes"
                value={product.sizes}
                // onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label htmlFor="offer" className="block text-sm font-medium text-gray-700">Offer</label>
              <input
                type="text"
                name="offer"
                id="offer"
                value={product.offer}
                // onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
              <input
                type="text"
                name="category"
                id="category"
                value={product.category}
                // onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label htmlFor="subCategory" className="block text-sm font-medium text-gray-700">Sub Category</label>
              <input
                type="text"
                name="subCategory"
                id="subCategory"
                value={product.subCategory}
                // onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label htmlFor="subSubCategory" className="block text-sm font-medium text-gray-700">Sub Sub Category</label>
              <input
                type="text"
                name="subSubCategory"
                id="subSubCategory"
                value={product.subSubCategory}
                // onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label htmlFor="seller" className="block text-sm font-medium text-gray-700">Seller</label>
              <input
                type="text"
                name="seller"
                id="seller"
                value={product.seller}
                // onChange={handleInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label htmlFor="images" className="block text-sm font-medium text-gray-700">Images</label>
              <input
                type="file"
                name="images"
                id="images"
                multiple
                // onChange={handleImageChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      );
}
