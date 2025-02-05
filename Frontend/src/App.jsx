import { useEffect, useState } from "react";
import { login, logout } from "./redux/authSlice.js";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import authServices from "./services/auth.js";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authServices
      .getCurrentUser()
      .then((data) => {
        if (data) {
          dispatch(login(data));
        } else {
          dispatch(logout());
          alert("user not login");
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex flex-col md:px-20 h-full">
      <div className="sticky top-6 backdrop-blur-lg w-full">
        <Header />
      </div>

      <main className="mt-5 h-full flex justify-center items-center">
        {loading ? <h1>Loading...</h1> : <Outlet />}
      </main>
    </div>
  );
};

export default App;
