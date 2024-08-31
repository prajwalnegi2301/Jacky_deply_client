import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from 'framer-motion';
import { FaUpload, FaBox, FaListAlt, FaCheckCircle } from 'react-icons/fa';

const Products = () => {


  const [products, setProducts] = useState([]);

  const navigateTo = useNavigate();

  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/product/getProducts",
        { withCredentials: true }
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    // <div className="bg-purple-200">
    //   <div>

    //     {/* for admin */}
    //     <h3>Post Product</h3>
    //     <form onSubmit={addProduct}>
    //       <div style={{ display: "flex", flexDirection: "column" }}>
    //         <label>Product MAIN IMAGE</label>
    //         <img
    //           src={productAvatarPreview ? `${productAvatarPreview}` : "/imgPL.webp"}
    //           alt="mainImg"
    //           className="mainImg"
    //         />
    //         <input
    //           type="file"
    //           onChange={(e) =>
    //             handleImagePreview(e, setProductAvatarPreview, setProductAvatar)
    //           }
    //           style={{ border: "none" }}
    //         />
    //       </div>

    //       <div>
    //         <input
    //           type="text"
    //           placeholder="Product Name"
    //           value={productName}
    //           onChange={(e) => setProductName(e.target.value)}
    //         />
            
          
    //         <input
    //           type="text"
    //           placeholder="Product Type"
    //           value={productType}
    //           onChange={(e) => setProductType(e.target.value)}
    //         />
           

    //         <textarea
    //           rows="10"
    //           placeholder="Blog First Sub Paragraph Comes Here..."
    //           value={desc}
    //           onChange={(e) => setDesc(e.target.value)}
    //         />
    //       </div>

    //       <div>
    //         <select
    //           id="isFoodItem"
    //           name="isFoodItem"
    //           className="w-full p-2 text-white-700 leading-tight focus:outline-none"
    //           value={isFoodItem}
    //           onChange={(e) => setIsFoodItem(e.target.value)}
    //         >
    //           <option value="">isFoodItem</option>
    //           <option value="Yes">Yes</option>
    //           <option value="No">No</option>
    //         </select>
    //       </div>

    //       <button type="submit">Add Product details</button>
    //     </form>
    //   </div>


    //   <section>
    //     {products && products.length > 0
    //       ? products.map((product) => (
    //           <div key={product._id}>
    //             {product.productAvatar && <img src={product.productAvatar.url} alt="blogImg" />}
    //             <h4>{product.desc}</h4>
    //             <h4>{product.isFoodItem}</h4>
    //             <h4>{product.productType}</h4>
    //             <h4>{product.productName}</h4>
    //           </div>
    //         ))
    //       : "No products.."}
    //   </section>
    // </div>

      <section className="my-8 min-h-screen mx-40 shadow-xl rounded-xl md:mx-96 py-4 px-8 ">
        {products && products.length > 0 ? (
          products.map((product) => (
            <motion.div
              key={product._id}
              className="bg-white p-4 mb-4 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {product.avatar && (
                <img
                  src={product.avatar.url}
                  alt="Product Image"
                  className="w-full h-48 object-cover rounded"
                />
              )}
              <h4 className="text-xl font-bold mt-2">Product Name: {product.productName}</h4>
              <p className="text-white-700">Product Desc: {product.desc}</p>
              <p className="text-white-700">Type: {product.productType}</p>
              <p className="text-white-700">Food Item: {product.isFoodItem}</p>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-white-500">No products..</p>
        )}
      </section>
    
  );

};

export default Products;
