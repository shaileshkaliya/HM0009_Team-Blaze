import React, { useState } from "react";
import "./Login.css";
import LoginLogo from "../assets/Login.svg";
import tick from "../assets/tick.gif";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const formData = {
    email: "",
    username: "",
    confirmPassword: "",
    password: "",
  };
  const toastOptions = {
    position: "bottom-right",
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  let randomFourDigitNumber;
  const [data, setData] = useState(formData);
  const [otpOpt, setOtpOpt] = useState(false);
  const [otpVal, setOtpVal] = useState("");
  const [otpVerify, setOtpVerify] = useState(false);
  const [isStudent, setIsStudent] = useState(true);


  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const sendOtp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(data.email)) {
      randomFourDigitNumber = Math.floor(1000 + Math.random() * 9000);
      console.log("OTP sent");
      toast.success("OTP sent successfully to given mail ", toastOptions);
      setOtpOpt(true);
    }else{
      setOtpOpt(false);
      toast.error("Enter valid email", toastOptions)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (handleValidations()) {
      const { username, email, password } = formData;
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

  const handleOtpSubmit = (e) => {
    if (otpVal.length === 4) {
      const enteredOtp = parseInt(otpVal);
      if (enteredOtp === randomFourDigitNumber) {
        setOtpVerify(true);
        toast.success("OTP Verified ", toastOptions);
      } else {
        setOtpVerify(false);
        console.log("Hii");
        toast.error("OTP doesn't match!", toastOptions);
      }
    } else {
      setOtpVerify(false);
      toast.error("OTP doesn't match!", toastOptions);
    }
  };

  const handleValidations = () => {
    const { username, email, password, confirmPassword } = data;

    if (password != confirmPassword) {
      toast.error("Password & confirm password must be same", toastOptions);
      return false;
    } else if (username.length < 3) {
      toast.error("Username should be greater than 3 characters", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error("Password length should be greater than 8", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("Email is required", toastOptions);
      return false;
    } else if (!otpVerify) {
      toast.error("OTP verification is required", toastOptions);
      return false;
    }

    return true;
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-3/4 h-3/4  rounded-xl shadow-xl flex ">
        <img src={LoginLogo} alt=".." className="h-4/5" />
        <div className=" h-full w-full flex flex-col justify-between items-center">
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
                className="p-2 rounded-lg text-[#000000] outline-none pl-4 w-[300px] shadow1"
              />
              <div className="pl-28 flex justify-center gap-8">
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter your Email"
                  className="p-2 rounded-lg text-[#000000] outline-none pl-4 w-[300px] shadow1"
                />
                <div className="button-8" role="button" onClick={sendOtp}>
                  Send OTP
                </div>
              </div>
              {otpOpt ? (
                <div className="flex justify-center items-center gap-2">
                  <input
                    type="text"
                    name="otp"
                    value={otpVal}
                    placeholder="OTP"
                    onChange={(e) => {
                      setOtpVal(e.target.value);
                    }}
                    className="p-2 rounded-lg text-[#000000] outline-none pl-4 w-[200px] shadow1"
                  />
                  <div
                    className="bg-[#27ae60] text-white text-xs cursor-pointer rounded-lg p-2 font-semibold"
                    onClick={(e) => handleOtpSubmit(e)}
                  >
                    Verify OTP
                  </div>
                </div>
              ) : null}

              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                value={data.password}
                onChange={(e) => handleChange(e)}
                className="p-2 rounded-lg text-[#000000] outline-none pl-4 w-[300px] shadow1"
              />
              <input
                type="password"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={(e) => handleChange(e)}
                placeholder="Re-enter your Password"
                className="p-2 rounded-lg text-[#000000] outline-none pl-4 w-[300px] shadow1"
              />
            </form>
          </div>
          <button
            className="button-55"
            role="button"
            // type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Signup
          </button>

          <div>
            Already have an account ?{" "}
            <Link to="/login">
              <span className="text-[#27ae60]">Login Here</span>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
