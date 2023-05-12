import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
const Login = () => {
  const { SignInUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const from = "/home";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    SignInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        navigate(from, { replace: true });
        setSuccess("login successful");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");
      });
  };
  return (
    <div className="py-24">
      <div className="container mx-auto space-y-9 w-3/12 p-8 bg-green-700 border-spacing-0 border-green-400">
        <form onSubmit={handleLogin} className=" space-y-9">
          <div className="form-control w-full">
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
          <div className="form-control w-full">
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
            <p className="text-orange-50">{error}</p>
            <p className="text-orange-50">{success}</p>
            <div className="flex justify-between">
              <p className="text-orange-50">
                New here?{" "}
                <Link className="text-yellow-500" to="/signup">
                  Create an account
                </Link>
              </p>
              <input
                className="btn btn-warning w-24"
                type="submit"
                value="Login"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
