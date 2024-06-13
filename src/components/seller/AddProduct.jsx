
// import React from "react";
// import { useForm, useFieldArray } from "react-hook-form";
// import axios from "axios";
// import { toast } from "react-hot-toast";

// export const AddProduct = () => {
//   const { control, register, handleSubmit, reset, watch } = useForm({
//     defaultValues: {
//       sku: "",
//       title: "",
//       price: "",
//       description: "",
//       brand: "",
//       sizes: [{ size: "", quantity: "" }],
//       category: "",
//       subCategory: "",
//       subSubCategory: "",
//       isOffer: false,
//       offer: { type: "percentage", value: "" },
//       images: [], // Default value for images
//     },
//   });

//   const { fields : sizeFields, append : sizeAppend} = useFieldArray(
//     {
//       control,
//       name: "sizes",
//     },
//   );
//   const { fields : imageFields, append : imageAppend} = useFieldArray(
//     {
//       control,
//       name: "images",
//     },
//   );
//   const onSubmit = async (data) => {
//     try {
//       // const response = await axios.post('http://localhost:5555/api/v1/product/add', data, {
//       //   withCredentials : true,
//       //   headers: {
//       //     'Content-Type': 'multipart/form-data',
//       //   },
//       // });

//       // if (response.data.success) {
//       //   toast.success('Product added successfully');
//       //   reset();
//       // }
//       console.log(data);
//     } catch (error) {
//       console.error("There was an error adding the product!", error);
//     }
//   };

//   const isOffer = watch("isOffer");

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Add Product</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="mb-4">
//           <label className="block mb-1">SKU</label>
//           <input
//             {...register("sku")}
//             className="w-full px-3 py-2 border rounded uppercase"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1">Title</label>
//           <input
//             {...register("title")}
//             className="w-full px-3 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1">Price</label>
//           <input
//             type="number"
//             {...register("price")}
//             className="w-full px-3 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1">Description</label>
//           <textarea
//             {...register("description")}
//             className="w-full px-3 py-2 border rounded"
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1">Brand</label>
//           <input
//             {...register("brand")}
//             className="w-full px-3 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4 col-span-1 md:col-span-2">
//           <label className="block mb-1">Sizes</label>
//           {sizeFields.map((item, index) => (
//             <div key={item.id} className="flex mb-2 space-x-2">
//               <input
//                 {...register(`sizes.${index}.size`)}
//                 placeholder="Size"
//                 className="w-full px-3 py-2 border rounded uppercase"
//               />
//               <input
//                 {...register(`sizes.${index}.quantity`)}
//                 placeholder="Quantity"
//                 type="number"
//                 className="w-full px-3 py-2 border rounded"
//               />
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() => sizeAppend({ size: "", quantity: "" })}
//             className="px-3 py-1 bg-blue-500 text-white rounded"
//           >
//             Add Size
//           </button>
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1">Category</label>
//           <input
//             {...register("category")}
//             className="w-full px-3 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1">Sub Category</label>
//           <input
//             {...register("subCategory")}
//             className="w-full px-3 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1">Sub Sub Category</label>
//           <input
//             {...register("subSubCategory")}
//             className="w-full px-3 py-2 border rounded"
//           />
//         </div>
//         {/* <div className="mb-4 col-span-1 md:col-span-2">
//           <label className="block mb-1">Images</label>
//           <input type="file" {...register('images')} multiple className="w-full px-3 py-2 border rounded" />
//         </div> */}

//         <div className="mb-4 col-span-1 md:col-span-2">
//           <label className="block mb-1">Images</label>
//           {imageFields.map((item, index) => (
//             <div key={item.id} className="flex mb-2 space-x-2">
//               <input
//                 {...register(`images.${index}`)}
//                 placeholder="Images"
//                 className="w-full px-3 py-2 border rounded"
//                 type="file"
//               />
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() => imageAppend()}
//             className="px-3 py-1 bg-blue-500 text-white rounded"
//           >
//             Add Image
//           </button>
//         </div>

//         <div className="mb-4 col-span-1 md:col-span-2">
//           <label className="block mb-1">Offer</label>
//           <input type="checkbox" {...register("isOffer")} /> Is Offer
//         </div>
//         {isOffer && (
//           <div className="mb-4 col-span-1 md:col-span-2">
//             <label className="block mb-1">Offer Type</label>
//             <select
//               {...register("offer.type")}
//               className="w-full px-3 py-2 border rounded"
//             >
//               <option value="percentage">Percentage</option>
//               <option value="amount">Amount</option>
//             </select>
//             <input
//               type="number"
//               {...register("offer.value")}
//               placeholder="Offer Value"
//               className="w-full px-3 py-2 border rounded mt-2"
//             />
//           </div>
//         )}
//       </div>
//       <button
//         type="submit"
//         className="px-4 py-2 bg-green-500 text-white rounded"
//       >
//         Add Product
//       </button>
//     </form>
//   );
// };



import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

export const AddProduct = () => {
  const { control, register, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      sku: "",
      title: "",
      price: "",
      description: "",
      brand: "",
      sizes: [{ size: "", quantity: "" }],
      category: "",
      subCategory: "",
      subSubCategory: "",
      isOffer: false,
      offer: { type: "percentage", value: "" },
      images: [], // Default value for images
    },
  });

  const { fields: sizeFields, append: sizeAppend } = useFieldArray({
    control,
    name: "sizes",
  });

  const { fields: imageFields, append: imageAppend } = useFieldArray({
    control,
    name: "images",
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      if (key !== "images" && key !== "sizes" && key !== "offer") {
        formData.append(key, data[key]);
      } else if (key === "images") {
        data.images.forEach((file) => formData.append("images", file));
      } else if (key === "sizes") {
        formData.append("sizes", JSON.stringify(data.sizes));
      } else if (key === "offer") {
        formData.append("offer", JSON.stringify(data.offer));
      }
    }

    try {
      // const response = await axios.post("http://localhost:5555/api/v1/product/add", formData, {
      //   withCredentials: true,
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });

      // if (response.data.success) {
      //   toast.success("Product added successfully");
      //   reset();
      // }
      console.log(formData);
    } catch (error) {
      console.error("There was an error adding the product!", error);
      toast.error("There was an error adding the product!");
    }
  };

  const isOffer = watch("isOffer");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block mb-1">SKU</label>
          <input {...register("sku")} className="w-full px-3 py-2 border rounded uppercase" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Title</label>
          <input {...register("title")} className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Price</label>
          <input type="number" {...register("price")} className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Description</label>
          <textarea {...register("description")} className="w-full px-3 py-2 border rounded"></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Brand</label>
          <input {...register("brand")} className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4 col-span-1 md:col-span-2">
          <label className="block mb-1">Sizes</label>
          {sizeFields.map((item, index) => (
            <div key={item.id} className="flex mb-2 space-x-2">
              <input
                {...register(`sizes.${index}.size`)}
                placeholder="Size"
                className="w-full px-3 py-2 border rounded uppercase"
              />
              <input
                {...register(`sizes.${index}.quantity`)}
                placeholder="Quantity"
                type="number"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          ))}
          <button type="button" onClick={() => sizeAppend({ size: "", quantity: "" })} className="px-3 py-1 bg-blue-500 text-white rounded">
            Add Size
          </button>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Category</label>
          <input {...register("category")} className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Sub Category</label>
          <input {...register("subCategory")} className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Sub Sub Category</label>
          <input {...register("subSubCategory")} className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4 col-span-1 md:col-span-2">
          <label className="block mb-1">Images</label>
          {imageFields.map((item, index) => (
            <div key={item.id} className="flex mb-2 space-x-2">
              <input {...register(`images.${index}`)} placeholder="Images" className="w-full px-3 py-2 border rounded" type="file" />
            </div>
          ))}
          <button type="button" onClick={() => imageAppend({})} className="px-3 py-1 bg-blue-500 text-white rounded">
            Add Image
          </button>
        </div>
        <div className="mb-4 col-span-1 md:col-span-2">
          <label className="block mb-1">Offer</label>
          <input type="checkbox" {...register("isOffer")} /> Is Offer
        </div>
        {isOffer && (
          <div className="mb-4 col-span-1 md:col-span-2">
            <label className="block mb-1">Offer Type</label>
            <select {...register("offer.type")} className="w-full px-3 py-2 border rounded">
              <option value="percentage">Percentage</option>
              <option value="amount">Amount</option>
            </select>
            <input
              type="number"
              {...register("offer.value")}
              placeholder="Offer Value"
              className="w-full px-3 py-2 border rounded mt-2"
            />
          </div>
        )}
      </div>
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
        Add Product
      </button>
    </form>
  );
};

