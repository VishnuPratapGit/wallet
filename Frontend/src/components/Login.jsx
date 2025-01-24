import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice.js";
import authServices from "../auth";

function Login({ title }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    authServices.login(inputData).then((data) => {
      dispatch(login(data));
      navigate("/");
    });
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
      className="border flex flex-col p-2 gap-1 w-max min-w-80"
      onSubmit={submitForm}
    >
      <div className="text-2xl">{title}</div>
      <input
        name="email"
        onChange={handleChange}
        value={inputData.email}
        type="email"
        placeholder="email"
      />
      <input
        name="password"
        onChange={handleChange}
        value={inputData.password}
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
