import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

import SignupPage from "./pages/SignupPage.jsx";
import Home from "./pages/Home.jsx";
import AuthWrapper from "./components/authWrapper.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import TransactionHistory from "./pages/TransactionHistory.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <AuthWrapper>
            <Home />
          </AuthWrapper>
        ),
      },
      {
        path: "login",
        element: (
          <AuthWrapper authenticate={false}>
            <LoginPage />
          </AuthWrapper>
        ),
      },
      {
        path: "signup",
        element: (
          <AuthWrapper authenticate={false}>
            <SignupPage />
          </AuthWrapper>
        ),
      },
      {
        path: "transaction-history",
        element: (
          <AuthWrapper>
            <TransactionHistory />
          </AuthWrapper>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
