import React from "react";
import Transaction from "../components/Transaction.jsx";
import AccountSection from "../components/AccountSection.jsx";
import UserInformation from "../components/UserInformation.jsx";

const Home = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-5 w-full h-full">
      <section>
        <AccountSection />
      </section>
      <section className="row-span-2">
        <Transaction />
      </section>
      <div>
        <UserInformation />
      </div>
    </div>
  );
};

export default Home;
