import React, { useEffect } from "react";
import History from "../components/History.jsx";
import { useDispatch } from "react-redux";
import accountService from "../services/account.services.js";
import { setTransactionHistory } from "../redux/historySlice.js";

const TransactionHistory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    accountService.getTransactionHistory().then((data) => {
      dispatch(setTransactionHistory(data.transaction));
    });
  }, []);

  return (
    <div className="w-full">
      <History />
    </div>
  );
};

export default TransactionHistory;
