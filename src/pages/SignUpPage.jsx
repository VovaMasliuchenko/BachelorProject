import { Link, useNavigate } from "react-router-dom";
import React, {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase"
import { addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

function SignUpPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault();
        if(Object.keys(validate()).length === 0) {
          createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
          navigate("/login");
          toast.success("Account was created successfuly!")
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
          <div className="col-span-1 flex justify-center items-center">
            <div className="w-128 pr-10 pl-10 pb-20 pt-20 border-none rounded-lg shadow-md xl:w-128 lg:w-128 md:w-96 sm:w-96 vsm:w-96">
              <div className="mb-5">
                <h1 className="text-3xl font-medium text-center font-regular font-goldman">Sign Up</h1>
                <hr className="mb-4 mt-5" />
              </div>
              <form onSubmit={signUp}>
                <div className="flex flex-col mb-3">
                  <input
                    type="text"
                    className="w-full border rounded-md bg-input-grey p-3 font-regular font-goldman"
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
                    className="w-full border rounded-md bg-input-grey p-3 font-regular font-goldman"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <p className="text-red-500 font-light m-2">
                  {errors.password}
                </p>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white rounded-md p-3 font-medium bg-button-orange font-regular font-inter">
                    Confirm
                  </button>
                </div>
                <div className="flex justify-center items-center mt-3 font-regular font-inter">
                  <p className="m-1">Already have an account?</p>
                  <Link to="/login"><a className="text-link cursor-pointer">Log in</a></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default SignUpPage;
  