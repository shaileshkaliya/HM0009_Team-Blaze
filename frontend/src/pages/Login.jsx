import React, { useState } from "react";
import "./Login.css";
import LoginLogo from "../assets/Login.svg";
import { Link } from "react-router-dom";

function Login() {
  const formData = {
    username: "",
    password: "",
  };
  const toastOptions = {
    position: "bottom-right",
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [data, setData] = useState(formData);
  const [isStudent, setIsStudent] = useState(true);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (handleValidations()) {
      const { username, password } = data;
      try {
        // const response = await axios.post(loginRoute, {
        //   username,
        //   password
        // });

        // console.log(response.data);

        // if (response.data.status === false) {

        //   toast.error(response.data.message, toastOptions);
        // } else if (response.data.status === true) {
        //   toast.success("Login Successfull. Redirecting to homepage", toastOptions);
        //   localStorage.setItem('chat-app-user', JSON.stringify(response.data.user));
        //   setTimeout(() => {
        //     navigate('/');
        //   }, 4000);
        // }
        alert("Login...");
      } catch (error) {
        console.error("Registration failed:", error.response.data);
        toast.error(error.response.data.message, toastOptions);
      }
    }
  };

  const handleValidations = () => {
    const { username, password } = data;
    if (username.length === "") {
      toast.error("Username is required...", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Passowrd is required...", toastOptions);
      return false;
    }
    return true;
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-3/4 h-3/4  rounded-xl shadow-xl flex ">
        <img src={LoginLogo} alt=".." className="h-4/5" />
        <div className=" h-full w-full flex flex-col justify-evenly items-center">
          <div className="w-full flex justify-center ">
            <button
              className={`button-48 ${isStudent ? "bg-[#27f7357a]" : ""}`}
              role="button"
              onClick={() => {
                setIsStudent(true);
              }}
            >
              <span className="text">Student</span>
            </button>

            <button
              // className="button-48-2"
              className={`button-48-2 ${!isStudent ? "bg-[#27f7357a]" : ""}`}
              role="button"
              onClick={() => {
                setIsStudent(false);
              }}
            >
              <span className="text">Mentor</span>
            </button>
          </div>

          <div className="w-full flex justify-center">
            <form
              action=""
              onSubmit={(e) => handleSubmit(e)}
              className="flex flex-col justify-center items-center gap-8"
            >
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={data.username}
                onChange={(e) => handleChange(e)}
                className="p-3 rounded-lg text-[#000000] outline-none pl-4 w-[300px] shadow1"
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                value={data.password}
                onChange={(e) => handleChange(e)}
                className="p-3 rounded-lg text-[#000000] outline-none pl-4 w-[300px] shadow1"
              />
            </form>
          </div>
          <button class="button-55" role="button" >
            Login
          </button>

          <div>
            Don't have an account ?{" "}
            <Link to="/signup">
              <span className="text-[#27ae60]">Create One</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
