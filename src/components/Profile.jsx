import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const Profile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    addresses: [],
  });

  const [editMode, setEditMode] = useState(true);
  const [newAddress, setNewAddress] = useState({
    addressLine1: '',
    addressLine2: '',
    landmark: '',
    city: '',
    district: '',
    state: '',
    postalCode: '',
  });

  useEffect(() => {
    // Fetch user data
    axios.get('/api/v1/user/profile')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({ ...newAddress, [name]: value });
  };

  const handleAddAddress = () => {
    setUser({
      ...user,
      addresses: [...user.addresses, newAddress],
    });
    setNewAddress({
      addressLine1: '',
      addressLine2: '',
      landmark: '',
      city: '',
      district: '',
      state: '',
      postalCode: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Profile Updated")
    // Update user data
    // axios.put('/api/v1/user/profile', user)
    //   .then(response => {
    //     setUser(response.data);
    //     setEditMode(false);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-6">Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            // onChange={handleInputChange}
            disabled={!editMode}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            // onChange={handleInputChange}
            disabled={!editMode}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={user.phone}
            // onChange={handleInputChange}
            disabled={!editMode}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Addresses</h2>
          {/* {user.addresses.map((address, index) => (
            <div key={index} className="border p-4 rounded-md mb-4">
              <p>{address.addressLine1}</p>
              <p>{address.addressLine2}</p>
              <p>{address.landmark}</p>
              <p>{address.city}, {address.district}</p>
              <p>{address.state}, {address.postalCode}</p>
            </div>
          ))} */}
          {editMode && (
            <div className="border p-4 rounded-md mb-4">
              <h3 className="text-lg font-semibold mb-2">Add New Address</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">Address Line 1</label>
                  <input
                    type="text"
                    name="addressLine1"
                    id="addressLine1"
                    value={newAddress.addressLine1}
                    // onChange={handleAddressChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">Address Line 2</label>
                  <input
                    type="text"
                    name="addressLine2"
                    id="addressLine2"
                    value={newAddress.addressLine2}
                    // onChange={handleAddressChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label htmlFor="landmark" className="block text-sm font-medium text-gray-700">Landmark</label>
                  <input
                    type="text"
                    name="landmark"
                    id="landmark"
                    value={newAddress.landmark}
                    // onChange={handleAddressChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={newAddress.city}
                    // onChange={handleAddressChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label htmlFor="district" className="block text-sm font-medium text-gray-700">District</label>
                  <input
                    type="text"
                    name="district"
                    id="district"
                    value={newAddress.district}
                    // onChange={handleAddressChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={newAddress.state}
                    // onChange={handleAddressChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    value={newAddress.postalCode}
                    // onChange={handleAddressChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <button
                  type="button"
                //   onClick={handleAddAddress}
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                >
                  Add Address
                </button>
              </div>
            </div>
          )}
        </div>
        <div>
          {editMode ? (
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md"
            >
              Save Changes
            </button>
          ) : (
            <button
              type="button"
            //   onClick={() => setEditMode(true)}
              className="w-full bg-blue-500 text-white p-2 rounded-md"
            >
              Edit Profile
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

