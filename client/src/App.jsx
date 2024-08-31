import { useContext,useEffect, useState } from "react";
import { Context, ContextI, ContextD } from "./main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import ProductComplaint from "./Pages/ProductComplaint";
import InstructorFeedback from "./Pages/InstructorFeedback";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import DogCharacteristics from "./Pages/DogCharacteristics";
import InstructionsAboutDog from "./Pages/InstructionAboutDog";
import Blog from "./Pages/Blog";
import PartnerWithUs from "./Pages/PartnerWithUs";
import MateServices from "./Pages/MateServices";
import Products from "./Pages/Products";
import AdoptPuppy from "./Pages/AdoptPuppy";
import StrayDog from "./Pages/StrayDog";
import AdoptTrainedDog from "./Pages/AdoptTrainedDog";
import About from "./Pages/AboutUs";
import DoctorAppointment from './Pages/AppointmentDoctor';
import DogAtCenter from './Pages/AppointmentDogAtCenter';
import WhoIAm from "./Pages/WhoIAm";
import axios from "axios";
import ChatBase from "./chats/ChatBase";


const App=()=> {

  const { isUserAuthenticated, setIsUserAuthenticated, setUser } =
    useContext(Context);
  const {
    isInstructorAuthenticated,
    setIsInstructorAuthenticated,
    setInstructor,
  } = useContext(ContextI);
  const {
    isDoctorAuthenticated,
    setIsDoctorAuthenticated,
    setDoctor,
  } = useContext(ContextD);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/v1/user/getUserProfile",
          {
            withCredentials: true,
          }
        );

        setIsUserAuthenticated(true);
        setUser(data.user);
      } catch (error) {
        setIsUserAuthenticated(false);
        setUser({});
      }
    };
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/v1/user/getDoctorProfile",
          {
            withCredentials: true,
          }
        );

        setIsDoctorAuthenticated(true);
        setDoctor(data.user);
      } catch (error) {
        setIsDoctorAuthenticated(false);
        setDoctor({});
      }
    };
    const fetchInstructors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/v1/user/getInstructorProfile",
          {
            withCredentials: true,
          }
        );

        setIsInstructorAuthenticated(true);
        setInstructor(data.user);
      } catch (error) {
        setIsInstructorAuthenticated(false);
        setInstructor({});
      }
    };
    fetchUsers();
    fetchInstructors();
    fetchDoctors();
  }, [isUserAuthenticated, isInstructorAuthenticated,isDoctorAuthenticated,setDoctor,setInstructor,setUser]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productComplaint" element={<ProductComplaint />} />
        <Route path="/instructorFeedback" element={<InstructorFeedback />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dogCharacteristics" element={<DogCharacteristics />} />
        <Route path="/instructionsAboutDog" element={<InstructionsAboutDog />}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/partnerWithUs" element={<PartnerWithUs />} />
        <Route path="/mateService" element={<MateServices />} />
        <Route path="/product" element={<Products />} />
        <Route path="/adoptPuppy" element={<AdoptPuppy />} />
        <Route path="/strayDog" element={<StrayDog />} />
        <Route path="/adoptTrainedDog" element={<AdoptTrainedDog />} />
        <Route path="/about" element={<About />} />
        <Route path='/dogAtCenter' element={<DogAtCenter/>}/>
        <Route path='/doctorAppointment' element={<DoctorAppointment/>}/>
        <Route path='/chatBase' element={<ChatBase/>}/>
        <Route path='/who' element={<WhoIAm/>}/>


        {/*
      
      <Route path='/instructorAtHomeAppointment' element={<InstructorAtHomeAppointment/>}/>
     
  
     
      */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
