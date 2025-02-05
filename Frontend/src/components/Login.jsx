import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/authSlice.js";
import authServices from "../services/auth.js";

function Login({ title }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    const logged = await authServices.login(inputData);
    if (!logged) alert("User Login Failed");

    authServices
      .getCurrentUser()
      .then((data) => {
        if (data) {
          dispatch(login(data));
          navigate("/");
        } else {
          dispatch(logout());
          alert("Getting user details failed!");
          navigate("/login");
        }
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  return (
    <form
      className="border border-neutral-500 flex flex-col p-5 gap-3 w-max min-w-80"
      onSubmit={submitForm}
    >
      <div className="text-2xl text-center">{title}</div>
      {loading && <h2 className="self-center">Loading...</h2>}
      <input
        name="email"
        onChange={handleChange}
        value={inputData.email}
        type="email"
        className="mt-1 block w-full px-3 py-2 border border-neutral-600 rounded-md"
        placeholder="email"
      />
      <input
        name="password"
        onChange={handleChange}
        value={inputData.password}
        className="mt-1 block w-full px-3 py-2 border border-neutral-600 rounded-md"
        type="text"
        placeholder="password"
      />
      <button className="mt-1" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Login;
