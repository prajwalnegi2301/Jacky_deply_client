// // src/components/Navbar.js
// import React, { useContext, useState } from "react";
// import { Context } from "../main";
// import { toast } from "react-toastify";
// import axios from "axios";
// import {
//   FaHome,
//   FaInfoCircle,
//   FaPhoneAlt,
//   FaUserAlt,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import ComplaintDropdown from "./DropDown/ComplaintDropdown";
// import AboutDropdown from './DropDown/AboutDropdown';
// import AdoptDropdown from "./DropDown/AdoptDropdown";
// import AppointmentDropdown from "./DropDown/AppointmentDropdown";

// const Navbar = () => {
//   const { isUserAuthenticated, setIsUserAuthenticated } = useContext(Context);
//   const navigateTo = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const handleLogout = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.get(
//         "http://localhost:3000/api/v1/user/logoutUser",
//         {
//           withCredentials: true,
//         }
//       );

//       toast.success(data.message);
//       setIsUserAuthenticated(false);
//       navigateTo("/");
//     } catch (err) {
//       toast.error(err.response.data.message);
//     }
//   };

//   const goToLogin = () => {
//     navigateTo("/login");
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <nav className="bg-gradient-to-r from-slate-500 via-slate-500 to-slate-500 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white font-bold text-xl">
//           <Link to="/" className="flex items-center">
//             <FaHome className="mr-2" />
//             <span className="ml-2">Jacky</span>
//           </Link>
//         </div>
//         <div className="hidden md:flex space-x-4">
//           {isUserAuthenticated ? (
//             <button
//               className="text-white text-lg hover:text-slate-700 font-semibold"
//               onClick={handleLogout}
//             >
//               LOGOUT
//             </button>
//           ) : (
//             <button
//               className="text-white text-lg hover:text-slate-700 font-semibold"
//               onClick={goToLogin}
//             >
//               LOGIN
//             </button>
//           )}
//           {isUserAuthenticated && (
//             <Link to="/profile" className="text-white-300 hover:text-white">
//               Profile
//             </Link>
//           )}
//           <Link to="/product" className="text-white-300 hover:text-white">
//             Products
//           </Link>
//           <Link to="/mateService" className="text-white-300 hover:text-white">
//             Mate Services
//           </Link>
//           <div className="text-white-300 hover:text-white">
//             <AdoptDropdown />
//           </div>
//           <div className="text-white-300 hover:text-white">
//             <AppointmentDropdown />
//           </div>
//           <div className="text-white-300 hover:text-white">
//             <AboutDropdown />
//           </div>
//           {isUserAuthenticated ? (
//             <div className="text-slate-500 text-lg hover:text-slate-700 font-semibold flex items-center">
//               <FaUserAlt className="inline-block mr-2" />
//               <ComplaintDropdown />
//             </div>
//           ) : (
//             <Link
//               to="/contact"
//               className="text-slate-500 text-lg hover:text-slate-700 font-semibold flex items-center"
//             >
//               <FaInfoCircle className="inline-block mr-2" />
//               Contact Us
//             </Link>
//           )}
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleSidebar} className="text-white">
//             {sidebarOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>
//       {sidebarOpen && (
//         <div className="md:hidden flex flex-col space-y-4 mt-4">
//           {isUserAuthenticated ? (
//             <button
//               className="text-white text-lg hover:text-slate-700 font-semibold"
//               onClick={handleLogout}
//             >
//               LOGOUT
//             </button>
//           ) : (
//             <button
//               className="text-white text-lg hover:text-slate-700 font-semibold"
//               onClick={goToLogin}
//             >
//               LOGIN
//             </button>
//           )}
//           {isUserAuthenticated && (
//             <Link to="/profile" className="text-white-300 hover:text-white">
//               Profile
//             </Link>
//           )}
//           <Link to="/product" className="text-white-300 hover:text-white">
//             Products
//           </Link>
//           <Link to="/mateService" className="text-white-300 hover:text-white">
//             Mate Services
//           </Link>
//           <div className="text-white-300 hover:text-white">
//             <AdoptDropdown />
//           </div>
//           <div className="text-white-300 hover:text-white">
//             <AppointmentDropdown />
//           </div>
//           <div className="text-white-300 hover:text-white">
//             <AboutDropdown />
//           </div>
//           {isUserAuthenticated ? (
//             <div className="text-slate-500 text-lg hover:text-slate-700 font-semibold flex items-center">
//               <FaUserAlt className="inline-block mr-2" />
//               <ComplaintDropdown />
//             </div>
//           ) : (
//             <Link
//               to="/contact"
//               className="text-slate-500 text-lg hover:text-slate-700 font-semibold flex items-center"
//             >
//               <FaInfoCircle className="inline-block mr-2" />
//               Contact Us
//             </Link>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;





//2

// import React, { useContext, useState } from "react";
// import { Context } from "../main";
// import { toast } from "react-toastify";
// import axios from "axios";
// import {
//   FaHome,
//   FaInfoCircle,
//   FaPhoneAlt,
//   FaUserAlt,
//   FaBars,
//   FaTimes,
//   FaSignInAlt,
//   FaSignOutAlt,
//   FaProductHunt,
//   FaHeart,
//   FaCalendarAlt,
//   FaQuestionCircle,
// } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import ComplaintDropdown from "./DropDown/ComplaintDropdown";
// import AboutDropdown from './DropDown/AboutDropdown';
// import AdoptDropdown from "./DropDown/AdoptDropdown";
// import AppointmentDropdown from "./DropDown/AppointmentDropdown";

// const Navbar = () => {
//   const { isUserAuthenticated, setIsUserAuthenticated } = useContext(Context);
//   const navigateTo = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const handleLogout = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.get(
//         "http://localhost:3000/api/v1/user/logoutUser",
//         {
//           withCredentials: true,
//         }
//       );

//       toast.success(data.message);
//       setIsUserAuthenticated(false);
//       navigateTo("/");
//     } catch (err) {
//       toast.error(err.response.data.message);
//     }
//   };

//   const goToLogin = () => {
//     navigateTo("/login");
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <nav className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white font-bold text-2xl">
//           <Link to="/" className="flex items-center">
//             <FaHome className="mr-2" />
//             <span>Jacky</span>
//           </Link>
//         </div>
//         <div className="hidden md:flex space-x-4 items-center">
//           {isUserAuthenticated ? (
//             <button
//               className="text-white text-lg hover:text-white-300 font-semibold flex items-center"
//               onClick={handleLogout}
//             >
//               <FaSignOutAlt className="mr-2" />
//               LOGOUT
//             </button>
//           ) : (
//             <button
//               className="text-white text-lg hover:text-white-300 font-semibold flex items-center"
//               onClick={goToLogin}
//             >
//               <FaSignInAlt className="mr-2" />
//               LOGIN
//             </button>
//           )}
//           {isUserAuthenticated && (
//             <Link to="/profile" className="text-white text-lg hover:text-white-300 font-semibold flex items-center">
//               <FaUserAlt className="mr-2" />
//               Profile
//             </Link>
//           )}
//           <Link to="/product" className="text-white text-lg hover:text-white-300 font-semibold flex items-center">
//             <FaProductHunt className="mr-2" />
//             Products
//           </Link>
//           <Link to="/mateService" className="text-white text-lg hover:text-white-300 font-semibold flex items-center">
//             <FaHeart className="mr-2" />
//             Mate Services
//           </Link>
//           <div className="text-white hover:text-white-300">
//             <AdoptDropdown />
//           </div>
//           <div className="text-white hover:text-white-300">
//             <AppointmentDropdown />
//           </div>
//           <div className="text-white hover:text-white-300">
//             <AboutDropdown />
//           </div>
//           {isUserAuthenticated ? (
//             <div className="text-white text-lg hover:text-white-300 font-semibold flex items-center">
//               <FaQuestionCircle className="mr-2" />
//               <ComplaintDropdown />
//             </div>
//           ) : (
//             <Link
//               to="/contact"
//               className="text-white text-lg hover:text-white-300 font-semibold flex items-center"
//             >
//               <FaInfoCircle className="mr-2" />
//               Contact Us
//             </Link>
//           )}
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleSidebar} className="text-white">
//             {sidebarOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>
//       {sidebarOpen && (
//         <div className="md:hidden flex flex-col space-y-4 mt-4">
//           {isUserAuthenticated ? (
//             <button
//               className="text-white text-lg hover:text-white-300 font-semibold flex items-center"
//               onClick={handleLogout}
//             >
//               <FaSignOutAlt className="mr-2" />
//               LOGOUT
//             </button>
//           ) : (
//             <button
//               className="text-white text-lg hover:text-white-300 font-semibold flex items-center"
//               onClick={goToLogin}
//             >
//               <FaSignInAlt className="mr-2" />
//               LOGIN
//             </button>
//           )}
//           {isUserAuthenticated && (
//             <Link to="/profile" className="text-white text-lg hover:text-white-300 font-semibold flex items-center">
//               <FaUserAlt className="mr-2" />
//               Profile
//             </Link>
//           )}
//           <Link to="/product" className="text-white text-lg hover:text-white-300 font-semibold flex items-center">
//             <FaProductHunt className="mr-2" />
//             Products
//           </Link>



        



//           <Link to="/mateService" className="text-white text-lg hover:text-white-300 font-semibold flex items-center">
//             <FaHeart className="mr-2" />
//             Mate Services
//           </Link>
//           <div className="text-white hover:text-white-300">
//             <AdoptDropdown />
//           </div>
//           <div className="text-white hover:text-white-300">
//             <AppointmentDropdown />
//           </div>
//           <div className="text-white hover:text-white-300">
//             <AboutDropdown />
//           </div>
//           {isUserAuthenticated ? (
//             <div className="text-white text-lg hover:text-white-300 font-semibold flex items-center">
//               <FaQuestionCircle className="mr-2" />
//               <ComplaintDropdown />
//             </div>
//           ) : (
//             <Link
//               to="/contact"
//               className="text-white text-lg hover:text-white-300 font-semibold flex items-center"
//             >
//               <FaInfoCircle className="mr-2" />
//               Contact Us
//             </Link>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useContext, useState } from "react";
import { Context } from "../main";
import { toast } from "react-toastify";
import axios from "axios";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ComplaintDropdown from "./DropDown/ComplaintDropdown";
import AboutDropdown from "./DropDown/AboutDropdown";
import AdoptDropdown from "./DropDown/AdoptDropdown";
import AppointmentDropdown from "./DropDown/AppointmentDropdown";

const Navbar = () => {
  const { isUserAuthenticated, setIsUserAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/user/logoutUser",
        {
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setIsUserAuthenticated(false);
      navigateTo("/");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const goToLogin = () => {
    navigateTo("/login");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="bg-gradient-to-b from-purple-600 to-purple-600 py-4 px-12 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
          <Link to="/" className="flex items-center">
       
            <span>Jacky</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          {isUserAuthenticated ? (
            <button
              className="text-white text-lg hover:text-white-300 font-semibold flex items-center"
              onClick={handleLogout}
            >
          
              LOGOUT
            </button>
          ) : (
            <button
              className="text-white text-lg hover:text-white-300 font-semibold flex items-center"
              onClick={goToLogin}
            >
           
              LOGIN
            </button>
          )}
          {isUserAuthenticated && (
            <Link to="/profile" className="text-white text-lg hover:text-white-300 font-semibold flex items-center">
             Profile
            
            </Link>
            
          )}
          {isUserAuthenticated && (
            <Link to="/chatBase" className="text-white text-lg hover:text-white-300 font-semibold flex items-center">
             Chat
            
            </Link>
            
          )}
          <Link to="/product" className="text-white text-lg hover:text-white-300 font-semibold flex items-center">
           
            Products
          </Link>
          <Link to="/mateService" className="text-white text-lg hover:text-white-300 font-semibold flex items-center">
         
            Mate Services
          </Link>
          <div className="text-white hover:text-white-300">
            <AdoptDropdown />
          </div>
          <div className="text-white hover:text-white-300">
            <AppointmentDropdown />
          </div>
          <div className="text-white hover:text-white-300">
            <AboutDropdown />
          </div>
          {isUserAuthenticated ? (
            <div className="text-white text-lg hover:text-white-300 font-semibold flex items-center">
          
              <ComplaintDropdown />
            </div>
          ) : (
            <Link
              to="/contact"
              className="text-white text-lg hover:text-white-300 font-semibold flex items-center"
            >
           
              Contact Us
            </Link>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-white">
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {sidebarOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          {isUserAuthenticated ? (
            <button
              className="text-white text-lg hover:text-white-300 font-semibold flex items-center"
              onClick={handleLogout}
            >
            
              LOGOUT
            </button>
          ) : (
            <button
              className="text-white text-lg hover:text-white-300 font-semibold flex items-center"
              onClick={goToLogin}
            >
            
              LOGIN
            </button>
          )}
          {isUserAuthenticated && (
            <Link to="/profile" className="text-white text-lg hover:text-white-300 font-semibold flex items-center">
           
              Profile
            </Link>
          )}
           {isUserAuthenticated && (
            <Link to="/chatBase" className="text-white text-lg hover:text-white-300 font-semibold flex items-center">
             Chat
            
            </Link>
            
          )}
          <Link to="/product" className="text-white text-lg hover:text-white-300 font-semibold flex items-center">
      
            Products
          </Link>
          <Link to="/mateService" className="text-white text-lg hover:text-white-300 font-semibold flex items-center">
          
            Mate Services
          </Link>
          <div className="text-white hover:text-white-300">
            <AdoptDropdown />
          </div>
          <div className="text-white hover:text-white-300">
            <AppointmentDropdown />
          </div>
          <div className="text-white hover:text-white-300">
            <AboutDropdown />
          </div>
          {isUserAuthenticated ? (
            <div className="text-white text-lg hover:text-white-300 font-semibold flex items-center">
           
              <ComplaintDropdown />
            </div>
          ) : (
            <Link
              to="/contact"
              className="text-white text-lg hover:text-white-300 font-semibold flex items-center"
            >
              
              Get In Touch
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
