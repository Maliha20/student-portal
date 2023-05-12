import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Signup = () => {
const{createUser, profileData, profileUpdate} = useContext(AuthContext)
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email,password)
    setError('')
    setSuccess('')
    if (!/(?=.*?[A-Z])/.test(password)) {
      setError("Please add at least one uppercase letter");
      return;
    } 
    else if (!/(?=.*?[0-9])/.test(password)) {
      setError("Please add at least one number");
      return;
    } 
    else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError("Please add at least one special character");
      return;
    } 
    else if (!/.{6,}/.test(password)) {
      setError("Password should not be less than 6 characters");
      return;
    }
    else if(password !== confirm){
     setError('Your password did not match')
     return
    }
    else{
      setSuccess('Your registration is successfull')
      setError('')
      event.target.reset()
    }
    createUser(email, password)
    .then((result) => {
      const registeredUser = result.user;
      console.log(registeredUser);
  
      profileUpdate(name,photo)
     .then(()=>{
        profileData(email,name,photo)
     })
    }
    )
    .catch(error =>{
        setError(error.message)
    });
  };
  return (
    <div className="py-24">
      <div className="container mx-auto w-3/12 p-8 bg-green-700 border-spacing-0 border-green-400">
        <form className=" space-y-9" onSubmit={handleSignup}>
          <div className="form-control w-96">
            <label className="input-group input-group-vertical">
              <span className="bg-orange-50 w-full">Name</span>
              <input
                type="text"
                placeholder="Alex"
                name="name"
                className="w-full input input-bordered"
              />
            </label>
          </div>
          <div className="form-control w-96">
            <label className="input-group input-group-vertical">
              <span className="bg-orange-50 w-full">Photo</span>
              <input
                type="text"
                placeholder="url"
                name="photo"
                className="w-full input input-bordered"
              />
            </label>
          </div>
          <div className="form-control w-96">
            <label className="input-group input-group-vertical">
              <span className="bg-orange-50 w-full">Email</span>
              <input
                type="text"
                placeholder="info@site.com"
                name="email"
                className="w-full input input-bordered"
              />
            </label>
          </div>
          <div className="form-control w-96">
            <label className="input-group input-group-vertical">
              <span className="bg-orange-50 w-full">Password</span>
              <input
                type={show ? "text" : "password"}
                placeholder="****"
                name="password"
                className="w-full input input-bordered"
              />
            </label>
            <p className="mt-4" onClick={() => setShow(!show)}>
              {show ? (
                <FaEyeSlash className="text-orange-50"></FaEyeSlash>
              ) : (
                <FaEye className="text-orange-50"></FaEye>
              )}
            </p>
          </div>
          <div className="form-control w-96">
            <label className="input-group input-group-vertical">
              <span className="bg-orange-50 w-full">Confirm Password</span>
              <input
                type={show ? "text" : "password"}
                placeholder="****"
                name="confirm"
                className="w-full input input-bordered"
              />
            </label>
          </div>
          <p className="text-orange-50">{error}</p>
          <p  className="text-orange-50">{success}</p>
          <div className="flex justify-between">
          <p className="text-orange-50">
            Already have an account?{" "}
            <Link className="text-yellow-500" to="/">
              go to login
            </Link>
          </p>
          <input  className="btn btn-warning w-24" type="submit" value="Signup" />
        </div>
        </form>
       
      </div>
    </div>
  );
};

export default Signup;
