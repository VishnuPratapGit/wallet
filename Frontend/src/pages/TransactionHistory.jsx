import React, { memo, useEffect, useState } from "react";
import History from "../components/History.jsx";
import { useDispatch, useSelector } from "react-redux";
import accountService from "../services/account.services.js";
import { setTransactionHistory } from "../redux/historySlice.js";

const TransactionHistory = memo(() => {
  const [page, setPage] = useState(0);
  const [flag, setFlag] = useState(true);
  const dispatch = useDispatch();
  const dataLength = useSelector((state) => state.history.data).length; //array

  const limit = 5;
  const skip = page * limit;

  function settingFlag() {
    if (dataLength > limit && skip === 0) {
      setFlag(false);
    }
  }

  useEffect(() => {
    if (dataLength === skip && flag === true) {
      accountService.getTransactionHistory(skip, limit).then((data) => {
        if (data.transaction.length === 0) {
          alert("no more transactions");
          setFlag(false);
          return;
        } else {
          dispatch(setTransactionHistory(data.transaction));
        }
      });
    }
    settingFlag();
  }, [page]);

  return (
    <div className="w-full">
      <History />
      <div className="mt-5">
        <button
          className="w-full"
          onClick={() => {
            if (skip > dataLength || flag === false) {
              alert("no more transactions");
              return;
            }
            setPage(page + 1);
          }}
        >
          More
        </button>
      </div>
    </div>
  );
});

export default TransactionHistory;
