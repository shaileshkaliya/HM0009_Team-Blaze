import React, { useState } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import home from "../assets/home.gif";
import search from "../assets/search.gif";
import logout from "../assets/logout2.png";
import create from "../assets/create.png";
import profile from "../assets/profiletab.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AskDoubt = () => {
  const formData = {
    title: "",
    description: "",
    category: "",
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
    const { title, description, category } = data;

    if (title==="") {
      toast.error("Title is required", toastOptions);
      return false;
    } else if (description==="") {
      toast.error("Description is required", toastOptions);
      return false;
    }else if (category==="") {
        toast.error("Category is required", toastOptions);
        return false;
      }

    return true;
  };

  const postData = () => {
    if (handleValidations()) {
        const { title, description, category } = data;        
        try {
          // const response = await axios.post(registerRoute, {
          //   username,
          //   email,
          //   password,
          // });
  
          // console.log(response.data);
  
          // if (response.data.status === false) {
  
          //   toast.error(response.data.message, toastOptions);
          // } else if (response.data.status === true) {
          //   toast.success("Registration Successfull. Redirecting to homepage", toastOptions);
          //   localStorage.setItem('chat-app-user', JSON.stringify(response.data.user));
          //   setTimeout(() => {
          //     navigate('/');
          //   }, 4000);
          // }
          alert("Datat Successfully files !");
        } catch (error) {
          console.error("Registration failed:", error.response.data);
          toast.error(error.response.data.message, toastOptions);
        }
      }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-1/5 h-full flex flex-col justify-between border-2 border-r-gray-500">
        <div className="w-full flex flex-col justify-start gap-6 pt-20">
          <div
            className="flex items-center px-8 gap-4 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={home} alt="" className="w-[35px] " />
            Home
          </div>
          <div
            className="flex items-center px-8 gap-4 cursor-pointer"
            onClick={() => {
              navigate("/search");
            }}
          >
            <img src={search} alt="" className="w-[35px] " />
            Search
          </div>
          <div
            className="flex items-center px-8 gap-4 cursor-pointer"
            onClick={() => {
              navigate("/askDoubt");
            }}
          >
            <img src={create} alt="" className="w-[35px] " />
            Ask Doubt
          </div>
          <div
            className="flex items-center px-8 gap-4 cursor-pointer"
            onClick={() => {
              navigate("/profile");
            }}
          >
            <img src={profile} alt="" className="w-[35px] " />
            Profile
          </div>
        </div>
        <div className="flex items-center px-8 gap-4 pb-8 cursor-pointer">
          <img src={logout} alt="" className="w-[35px] " />
          Logout
        </div>
      </div>
      <div className="w-4/5 h-full bg-[#f9fcff] bg-gradient1 flex flex-col gap-2 items-center">
        <h1 className="text-center text-3xl font-semibold mt-8">
          You can write your doubt/problem here{" "}
        </h1>
        <div className="w-3/4 h-3/4 bg-transparent shadow-xl flex flex-col justify-center items-center gap-8">
          <div className="w-5/6 h-[1px] bg-black" />
          <input
            type="text"
            placeholder="Enter your problem title"
            name="title"
            value={data.title}
            onChange={(e) => handleChange(e)}
            className="w-5/6 p-4 rounded-md shadow-lg outline-none border-none"
          />
          <div className="w-5/6 h-[1px] bg-black" />
          <textarea
            className="w-5/6 p-4 h-[100px] rounded-md shadow-lg outline-none border-none"
            type="text"
            placeholder="Enter your problem description"
            name="description"
            value={data.description}
            onChange={(e) => handleChange(e)}
          />
          <div className="w-5/6 h-[1px] bg-black" />
          <input
            type="text"
            placeholder="Enter your problem category"
            name="category"
            value={data.category}
            onChange={(e) => handleChange(e)}
            className="w-5/6 p-4 rounded-md shadow-lg outline-none border-none"
          />
          <button
            className="w-1/6 bg-[#27f7357a] p-4 rounded-md shadow-lg outline-none border-none"
            onClick={() => postData()}
          >
            Post Doubt
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AskDoubt;
