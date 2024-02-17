import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditInfo() {
  const formData = {
    name: "",
    username: "shaileshk",
    mail: "abc@gmail.com",
    bio: "",
    description: "",
    expertise: "",
    contact_no: "",
    linkedin: "",
    insta: "",
    whatsapp: "",
  };
  const toastOptions = {
    position: "bottom-right",
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const navigate = useNavigate();

  const [data, setData] = useState(formData);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleValidations = () => {
    const {
      name,
      username,
      mail,
      bio,
      description,
      expertise,
      contact_no,
      linkedin,
      insta,
      whatsapp,
    } = data;

    if (name === "") {
      toast.error("name is required", toastOptions);
      return false;
    }
    else if (description === "") {
      toast.error("Description is required", toastOptions);
      return false;
    }
    else if (expertise === "") {
      toast.error("Expertise is required", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <div className="w-full h-screen flex justify-center items-center overflow-scroll">
      <form
        action=""
        className="flex flex-col gap-2 w-full h-full items-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={data.name}
          onChange={(e) => handleChange(e)}
          className="w-5/6 p-4 rounded-md shadow-lg outline-none border-none"
        />
        <input
          type="text"
          placeholder="Enter your username"
          name="username"
          value={data.username}
          className="w-5/6 p-4 rounded-md shadow-lg outline-none border-none"
        />
        <input
          type="text"
          placeholder="Enter your mail "
          name="mail"
          value={data.mail}
          // onChange={(e) => handleChange(e)}
          className="w-5/6 p-4 rounded-md shadow-lg outline-none border-none"
        />
        <input
          type="text"
          placeholder="Enter your bio "
          name="bio"
          value={data.bio}
          onChange={(e) => handleChange(e)}
          className="w-5/6 p-4 rounded-md shadow-lg outline-none border-none"
        />
        <input
          type="text"
          placeholder="Enter your description"
          name="description"
          value={data.description}
          onChange={(e) => handleChange(e)}
          className="w-5/6 p-4 rounded-md shadow-lg outline-none border-none"
        />
        <input
          type="text"
          placeholder="Enter your expertise"
          name="expertise"
          value={data.expertise}
          onChange={(e) => handleChange(e)}
          className="w-5/6 p-4 rounded-md shadow-lg outline-none border-none"
        />
        <input
          type="text"
          placeholder="Enter your contact no"
          name="contact_no"
          value={data.contact_no}
          onChange={(e) => handleChange(e)}
          className="w-5/6 p-4 rounded-md shadow-lg outline-none border-none"
        />
        <input
          type="text"
          placeholder="Enter your linkedin"
          name="linkedin"
          value={data.linkedin}
          onChange={(e) => handleChange(e)}
          className="w-5/6 p-4 rounded-md shadow-lg outline-none border-none"
        />
        <input
          type="text"
          placeholder="Enter your insta id "
          name="insta"
          value={data.insta}
          onChange={(e) => handleChange(e)}
          className="w-5/6 p-4 rounded-md shadow-lg outline-none border-none"
        />
        <input
          type="text"
          placeholder="Enter your whatsapp no"
          name="whatsapp"
          value={data.whatsapp}
          onChange={(e) => handleChange(e)}
          className="w-5/6 p-4 rounded-md shadow-lg outline-none border-none"
        />
        <button
          className="w-1/6 bg-[#27f7357a] p-4 rounded-md shadow-lg outline-none border-none"
          type='submit'
        >
          Save Changes
        </button>{" "}
      </form>
      <ToastContainer />
    </div>
  );
}

export default EditInfo;
