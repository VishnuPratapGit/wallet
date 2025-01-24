import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      <main className="mt-10 flex justify-center items-center">
        <Outlet />
      </main>
    </>
  );
};

export default App;
