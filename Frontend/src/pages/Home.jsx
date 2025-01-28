import React from "react";
import Transaction from "../components/Transaction.jsx";
import AccountSection from "../components/AccountSection.jsx";
import UserInformation from "../components/UserInformation.jsx";

const Home = () => {
  return (
    <div className="grid grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 gap-5 w-full h-full">
      <section className="overflow-hidden">
        <AccountSection />
      </section>
      <section className="row-span-2 overflow-hidden">
        <Transaction />
      </section>
      <div className="overflow-hidden">
        <UserInformation />
      </div>
    </div>
  );
};

export default Home;
