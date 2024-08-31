import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaCalendarAlt, FaDog, FaImage, FaInfoCircle, FaWeightHanging, FaRegCalendarCheck } from "react-icons/fa";

const AppointmentDogAtCenter = () => {
  const [docAvatar, setdocAvatar] = useState("");
  const [dogName, setDogName] = useState("");
  const [dogBreed, setDogBreed] = useState("");
  const [dogGender, setDogGender] = useState("");
  
  const [dogAge, setDogAge] = useState("");
  const [dogWeight, setDogWeight] = useState("");
  const [animalAggression, setAnimalAggression] = useState("");
  const [dogNature, setDogNature] = useState("");
  const [dogStayDuration, setDogStayDuration] = useState("");
  const [date, setDate] = useState("");
  const [docAvatarPreview, setdocAvatarPreview] = useState("");

  const [appointments, setAppointments] = useState([]);

  const navigateTo = useNavigate();

  const getAllAppointments = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/dogAtCenter/getAllServices/centerVisit",
        { withCredentials: true }
      );
      setAppointments(data.appointments);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImagePreview = (e, setPreview, setFile) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
      setFile(file);
    };
  };

  const addAppointment = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("docAvatar", docAvatar);
    formData.append("dogName", dogName);
    formData.append("dogBreed", dogBreed);
 
    formData.append("dogAge", dogAge);
    formData.append("date", date);
    formData.append("dogStayDuration", dogStayDuration);
    formData.append("dogNature", dogNature);
    formData.append("dogWeight", dogWeight);
    formData.append("animalAggression", animalAggression);
    formData.append("dogGender", dogGender);

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/dogAtCenter/createService/centerVisit",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setdocAvatar("");
      setdocAvatarPreview("");
      setAnimalAggression("");
      setDogAge("");
      setDogNature("");
      setDogBreed("");
      setDate("");
      setDogStayDuration("");
      setDogWeight("");
      setDogName("");
      setDogGender("");

      toast.success(data.message);
      getAllAppointments(); // Refresh the blog list after adding a new one
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getAllAppointments();
  }, []);

  return (
    // <div className="bg-purple-200">
    //   <div>
    //     <h3>Post Appointments At Center</h3>
    //     <form onSubmit={addAppointment}>
    //       <div style={{ display: "flex", flexDirection: "column" }}>
    //         <label>Dog Main image</label>
    //         <img
    //           src={docAvatarPreview ? `${docAvatarPreview}` : "/imgPL.webp"}
    //           alt="mainImg"
    //           className="mainImg"
    //         />
    //         <input
    //           type="file"
    //           onChange={(e) =>
    //             handleImagePreview(e, setdocAvatarPreview, setdocAvatar)
    //           }
    //           style={{ border: "none" }}
    //         />
    //       </div>

    //       <div>
    //         <input
    //           type="text"
    //           placeholder="Dog Name"
    //           value={dogName}
    //           onChange={(e) => setDogName(e.target.value)}
    //         />
    //         <input
    //           type="text"
    //           placeholder="Date"
    //           value={date}
    //           onChange={(e) => setDate(e.target.value)}
    //         />
    //         <input
    //           type="text"
    //           placeholder="Dog Stay Duration"
    //           value={dogStayDuration}
    //           onChange={(e) => setDogStayDuration(e.target.value)}
    //         />
    //         <input
    //           type="text"
    //           placeholder="Dog Breed"
    //           value={dogBreed}
    //           onChange={(e) => setDogBreed(e.target.value)}
    //         />
    //         <input
    //           type="text"
    //           placeholder="Dog Age"
    //           value={dogAge}
    //           onChange={(e) => setDogAge(e.target.value)}
    //         />
    //         <input
    //           type="text"
    //           placeholder="dog Weight"
    //           value={dogWeight}
    //           onChange={(e) => setDogWeight(e.target.value)}
    //         />

    //         <div>
    //           <select
    //             id="dogGender"
    //             name="dogGender"
    //             className="w-full p-2 text-white-700 leading-tight focus:outline-none"
    //             value={dogGender}
    //             onChange={(e) => setDogGender(e.target.value)}
    //           >
    //             <option value="">Select dogGender</option>
    //             <option value="Male">Male</option>
    //             <option value="Female">Female</option>
    //           </select>
    //         </div>

    //         <div>
    //           <select
    //             id="animalAggression"
    //             name="animalAggression"
    //             className="w-full p-2 text-white-700 leading-tight focus:outline-none"
    //             value={animalAggression}
    //             onChange={(e) => setAnimalAggression(e.target.value)}
    //           >
    //             <option value="">Select AnimalAggression</option>
    //             <option value="Yes">Yes</option>
    //             <option value="No">No</option>
    //           </select>
    //         </div>

    //         <div>
    //           <select
    //             id="dogNature"
    //             name="dogNature"
    //             className="w-full p-2 text-white-700 leading-tight focus:outline-none"
    //             value={dogNature}
    //             onChange={(e) => setDogNature(e.target.value)}
    //           >
    //             <option value="">Select DogNature</option>
    //             <option value="Friendly">Friendly</option>
    //             <option value="NotFriendly">NotFriendly</option>
    //           </select>
    //         </div>

    //         <input
    //           type="text"
    //           placeholder="dog Size"
    //           value={dogSize}
    //           onChange={(e) => setDogSize(e.target.value)}
    //         />
    //       </div>

    //       <button type="submit">submit appointment</button>
    //     </form>
    //   </div>



    //   <section>
    //     {appointments && appointments.length > 0
    //       ? appointments.map((appointment) => (
    //           <div key={appointment._id}>
    //             {appointment.docAvatar && <img src={appointment.docAvatar.url} alt="blogImg" />}

    //             <h4>{dog.dogAge}</h4>
    //             <h4>{dog.dogGender}</h4>
    //             <h4>{dog.dogStayDuration}</h4>
    //             <h4>{dog.date}</h4>
    //             <h4>{dog.dogBreed}</h4>
    //             <h4>{dog.dogName}</h4>
    //             <h4>{dog.dogWeight}</h4>
    //             <h4>{dog.dogSize}</h4>
    //             <h4>{dog.dogNature}</h4>
    //             <h4>{dog.animalAggression}</h4>
    //           </div>
    //         ))
    //       : "No appointments.."}
    //   </section>
    // </div>


    <div className="bg-slate-100 p-8 min-h-screen flex flex-col items-center">
      <h3 className="text-3xl font-bold  mb-6">Post Appointments At Center</h3>
      <form onSubmit={addAppointment} className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <div className="mb-4">
          <label className="block  font-semibold mb-2">Dog Main Image</label>
          <div className="flex flex-col items-center mb-4">
            <img
              src={docAvatarPreview ? `${docAvatarPreview}` : "/imgPL.webp"}
              alt="mainImg"
              className="mainImg w-32 h-32 object-cover rounded-full mb-2"
            />
            <label className="cursor-pointer text-slate-900 flex items-center">
              <FaImage className="mr-2" />
              <input
                type="file"
                onChange={(e) =>
                  handleImagePreview(e, setdocAvatarPreview, setdocAvatar)
                }
                className="hidden"
              />
              <span>Choose Image</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <div className="relative mb-2">
            <FaDog className="absolute left-3 top-3 text-purple-600" />
            <input
              type="text"
              placeholder="Dog Name"
              value={dogName}
              onChange={(e) => setDogName(e.target.value)}
              className="border border-blue-300 rounded-md p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative mb-2">
            <FaCalendarAlt className="absolute left-3 top-3 text-purple-600" />
            <input
              type="date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-blue-300 rounded-md p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>




          <div className="mb-4 relative">
            <FaRegCalendarCheck className="absolute left-3 top-3 text-purple-600" />
            <select
              id="dogStayDuration"
              name="dogStayDuration"
              className="border border-blue-300 rounded-md p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={dogStayDuration}
              onChange={(e) => setDogStayDuration(e.target.value)}
            >
              <option value="">Select Duration</option>
              <option value="1Hour-1,000">1Hour-1,000</option>
              <option value="2Hours-2,000">2Hours-2,000</option>
              <option value="4Hours-4,000">4Hour-4,000</option>
              <option value="6Hours-5,000">6Hours-5,000</option>
              <option value="10Hours-8,000">10Hours-8,000</option>
              <option value="12Hours-10,000">12Hours-10,000</option>
              <option value="16Hours-12,000">16Hours-12,000</option>
              <option value="20Hours-15,000">20Hours-,15000</option>
              <option value="1Day-20,000">1Day-20,000</option>
              <option value="2Days-24,000">2Days-24,000</option>
              <option value="3Days-26,000">3Days-26,000</option>
              <option value="4Days-28,000">4Days-28,000</option>
              <option value="5Days-29,000">5Days-29,000</option>
              <option value="6Days-30,000">6Days-30,000</option>
              <option value="1week-32,000">1week-32,000</option>
              <option value="1.5weeks-34,000">1.5weeks-34,000</option>
              <option value="2weeks-38,000">2weeks-38,000</option>
              <option value="2.5weeks-40,000">2.5weeks-40,000</option>
            </select>
          </div>

          <div className="relative mb-2">
            <FaDog className="absolute left-3 top-3 text-purple-600" />
            <input
              type="text"
              placeholder="Dog Breed"
              value={dogBreed}
              onChange={(e) => setDogBreed(e.target.value)}
              className="border border-blue-300 rounded-md p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative mb-2">
            <FaInfoCircle className="absolute left-3 top-3 text-purple-600" />
            <input
              type="text"
              placeholder="Dog Age"
              value={dogAge}
              onChange={(e) => setDogAge(e.target.value)}
              className="border border-blue-300 rounded-md p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative mb-2">
            <FaWeightHanging className="absolute left-3 top-3 text-purple-600" />
            <input
              type="text"
              placeholder="Dog Weight"
              value={dogWeight}
              onChange={(e) => setDogWeight(e.target.value)}
              className="border border-blue-300 rounded-md p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-slate-780 font-semibold mb-2">Dog Gender</label>
          <select
            id="dogGender"
            name="dogGender"
            className="border border-blue-300 text-slate-500 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={dogGender}
            onChange={(e) => setDogGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-slate-780 font-semibold mb-2">Animal Aggression</label>
          <select
            id="animalAggression"
            name="animalAggression"
            className="border border-blue-300 text-slate-500 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={animalAggression}
            onChange={(e) => setAnimalAggression(e.target.value)}
          >
            <option value="">Select Aggression</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-slate-780 font-semibold mb-2">Dog Nature</label>
          <select
            id="dogNature"
            name="dogNature"
            className="border border-blue-300 text-slate-500 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={dogNature}
            onChange={(e) => setDogNature(e.target.value)}
          >
            <option value="">Select Nature</option>
            <option value="Friendly">Friendly</option>
            <option value="NotFriendly">Not Friendly</option>
          </select>
        </div>

        {/* <div className="mb-4">
          <label className="block text-purple-700 font-semibold mb-2">Dog Size</label>
          <input
            type="text"
            placeholder="Dog Size"
            value={dogSize}
            onChange={(e) => setDogSize(e.target.value)}
            className="border border-blue-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> */}

        <button type="submit" className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md w-full hover:bg-green-600">
          Submit Appointment
        </button>
      </form>




      {/* for admin */}

      {/* <section className="mt-8 w-full max-w-2xl">
        {appointments && appointments.length > 0 ? (
          appointments.map((appointment) => (
            <div key={appointment._id} className="bg-white shadow-md rounded-lg p-6 mb-4">
              {appointment.docAvatar && (
                <img src={appointment.docAvatar.url} alt="blogImg" className="w-32 h-32 object-cover rounded-full mb-4" />
              )}
              <div className="text-purple-700">
                <h4 className="font-bold mb-1">Name: {appointment.dogName}</h4>
                <p className="mb-1">Age: {appointment.dogAge}</p>
                <p className="mb-1">Gender: {appointment.dogGender}</p>
                <p className="mb-1">Stay Duration: {appointment.dogStayDuration}</p>
                <p className="mb-1">Date: {appointment.date}</p>
                <p className="mb-1">Breed: {appointment.dogBreed}</p>
                <p className="mb-1">Weight: {appointment.dogWeight}</p>
                <p className="mb-1">Size: {appointment.dogSize}</p>
                <p className="mb-1">Nature: {appointment.dogNature}</p>
                <p className="mb-1">Animal Aggression: {appointment.animalAggression}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-purple-700 text-xl font-bold">No appointments..</p>
        )}
      </section> */}
    </div>



  );

};

export default AppointmentDogAtCenter;
