import { Link, Navigate, BrowserRouter as Router, useNavigate } from "react-router-dom";
import React, {useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"
import { toast } from "react-toastify";

function LoginPage() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        if(Object.keys(validate()).length === 0) {
          signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            sessionStorage.setItem("user-id", auth.currentUser.uid)
            navigate("/categoryPage");
            toast.success("You've successfully logged in!")
        })
        }  
    }

    const validate = (values) => {
      const errors = {};
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{6,}$/;

      if (!email) {
        errors.email = "Email is required!";
      } else if (!regex.test(email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!password) {
        errors.password = "Password is required!";
      } else if (password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (!passRegex.test(password)) {
        errors.password =
          "Password should contains minimum 6 characters, first character is uppercase and contains at least one symbol";
      }
      setErrors(errors)
      return errors;
  };
    
    return (
      <div className="flex w-full h-screen justify-center">
        <div className="flex justify-center items-center space-x-20">
          <div className="flex justify-center items-center">
            <div className="w-128 pr-10 pl-10 pb-20 pt-20 border-none rounded-lg shadow-md xl:w-128 lg:w-128 md:w-96 sm:w-96 vsm:w-96">
              <div className="mb-5">
                <h1 className="text-3xl font-regular text-center font-goldman">Sign in</h1>
                <hr className="mb-4 mt-5" />
              </div>
              <form onSubmit={signIn}>
                <div className="flex flex-col mb-3">
                  <input
                    type="text"
                    className="w-full border rounded-md bg-input-grey p-3 focus:outline-0 font-regular font-goldman"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <p className="text-red-500 font-light m-2">
                  {errors.email}
                </p>
                <div className="flex flex-col mb-3">
                  <input
                    type="password"
                    className="w-full border rounded-md bg-input-grey p-3 focus:outline-0 font-regular font-goldman"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <p className="text-red-500 font-light m-2">
                  {errors.password}
                </p>
                <div className="flex space-x-2 items-center mb-3">
                  <input type="checkbox" className=""></input>
                  <p className="font-regular font-inter">Remember me</p>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-button-orange text-white rounded-md p-3 font-medium font-regular font-inter"
                    value="Submit"
                  >
                    Confirm
                  </button>
                </div>
                <div className="flex justify-center items-center mt-3 font-regular font-inter">
                  <p className="m-1">Don’t have an account?</p>
                  <Link to="/register"><a className="text-link cursor-pointer">Register</a></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default LoginPage;