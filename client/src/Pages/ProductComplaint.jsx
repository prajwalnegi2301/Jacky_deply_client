import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../main";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBarcode, FaBoxOpen, FaUtensils, FaExclamationTriangle, FaCommentDots } from "react-icons/fa";
import { motion } from "framer-motion";

const ProductComplaint = () => {
  const { isUserAuthenticated, setIsUserAuthenticated } = useContext(Context);
  const [productId, setProductId] = useState("");
  const [productType, setProductType] = useState("");
  const [productName, setProductName] = useState("");
  const [isFoodItem, setIsFoodItem] = useState("");
  const [isDefective, setIsDefective] = useState("");
  const [isNotReceived, setIsNotReceived] = useState("");
  const [isProductNotAsDescribed, setIsProductNotAsDescribed] = useState("");
  const [isOther, setIsOther] = useState("");
  const [description, setDescription] = useState("");
  const navigateTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/productComplaint/postComplaint",
        {
          productId,
          productName,
          productType,
          isFoodItem,
          isDefective,
          isNotReceived,
          isProductNotAsDescribed,
          isOther,
          description,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setProductId("");
      setProductName("");
      setProductType("");
      setIsFoodItem("");
      setIsDefective("");
      setIsNotReceived("");
      setIsProductNotAsDescribed("");
      setIsOther("");
      setDescription("");

      toast.success("complaint register successfully");
    
    } catch (err) {
      toast.error("Problem registering complaint");
      console.log(err);
    }
  };

  //   if(!isUserAuthenticated){
  //     navigateTo("/login");
  //   }

  return (
   
    <motion.div
      className="p-8 my-12 max-w-xl mx-auto bg-white shadow-md rounded-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-4 text-center">Product Complaint Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FaBarcode className="text-white-500" />
          <input
            type="text"
            placeholder="Product ID"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </motion.div>

        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FaBoxOpen className="text-white-500" />
          <input
            type="text"
            placeholder="Product Type"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </motion.div>

        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FaUtensils className="text-white-500" />
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </motion.div>

        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <FaExclamationTriangle className="text-white-500" />
          <span className="text-white-700">Is the product a food item?</span>
          <select
            value={isFoodItem}
            onChange={(e) => setIsFoodItem(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </motion.div>

        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <FaExclamationTriangle className="text-white-500" />
          <span className="text-white-700">Is the product defective?</span>
          <select
            value={isDefective}
            onChange={(e) => setIsDefective(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </motion.div>

        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <FaExclamationTriangle className="text-white-500" />
          <span className="text-white-700">Is the product not received?</span>
          <select
            value={isNotReceived}
            onChange={(e) => setIsNotReceived(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </motion.div>

        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <FaExclamationTriangle className="text-white-500" />
          <span className="text-white-700">Is the product not as described?</span>
          <select
            value={isProductNotAsDescribed}
            onChange={(e) => setIsProductNotAsDescribed(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </motion.div>

        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <FaExclamationTriangle className="text-white-500" />
          <span className="text-white-700">Is there another issue?</span>
          <select
            value={isOther}
            onChange={(e) => setIsOther(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </motion.div>

        <motion.div
          className="flex items-start space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <FaCommentDots className="text-white-500" />
          <textarea
            placeholder="Describe your issue"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </motion.div>

        <motion.button
          type="submit"
          className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Submit Complaint
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ProductComplaint;
