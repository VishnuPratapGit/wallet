import React, { memo, useEffect, useState } from "react";
import History from "../components/History.jsx";
import { useDispatch, useSelector } from "react-redux";
import accountService from "../services/account.services.js";
import { setTransactionHistory } from "../redux/historySlice.js";

const TransactionHistory = memo(() => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const historyData = useSelector((state) => state.history.data); //array
  console.log("historyData fron Transaction History: ", historyData);
  const limit = 5;
  const skip = page * limit;

  useEffect(() => {
    accountService.getTransactionHistory(skip, limit).then((data) => {
      dispatch(setTransactionHistory(data.transaction));
    });
  }, [page]);

  return (
    <div className="w-full">
      <History />
      <div className="flex sticky bottom-1 backdrop-blur-lg mt-6 gap-2">
        <button
          onClick={() => {
            if (skip <= 0) return;
            setPage(page - 1);
          }}
          className="w-full"
        >
          Prev
        </button>
        <button
          onClick={() => {
            if (limit > historyData.length) return;
            setPage(page + 1);
          }}
          className="w-full"
        >
          Next
        </button>
      </div>
    </div>
  );
});

export default TransactionHistory;
