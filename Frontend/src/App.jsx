import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { login } from "./redux/authSlice.js";
import authServices from "./services/auth.js";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    authServices.getCurrentUser().then((data) => {
      if (data) {
        dispatch(login(data));
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="flex flex-col sm:px-20 h-full">
      <div className="sticky top-6 backdrop-blur-lg w-full">
        <Header />
      </div>

      <main className="mt-5 h-full flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
