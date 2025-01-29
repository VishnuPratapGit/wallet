import React, { useEffect, useState, memo } from "react";
import accountService from "../services/account.services.js";
import { useSelector } from "react-redux";
import TransactionDetails from "./TransactionDetails.jsx";

const History = memo(() => {
  const historyData = useSelector((state) => state.history.data);
  const user = useSelector((state) => state.auth.data);

  return (
    <div className="w-full flex flex-col gap-3">
      {historyData.map((t, index) => (
        <div
          key={index}
          className="border py-4 px-8 w-full rounded-4xl border-neutral-800 font-medium"
        >
          {t.senderId.email === user?.email ? (
            <TransactionDetails
              heading={"Paid to"}
              name={t.recieverId.name}
              t={t}
            />
          ) : (
            <TransactionDetails
              heading={"Received from"}
              name={t.senderId.name}
              t={t}
            />
          )}
        </div>
      ))}
    </div>
  );
});

export default History;
