import React, { useState } from "react";
import { Send } from "lucide-react";
import accountService from "../services/account.services.js";
import { useDispatch } from "react-redux";
import { updateBalance } from "../redux/accountBalanceSlice.js";

const Transaction = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const details = {
      to: email,
      amount: Number(amount),
    };

    await accountService.transferAmount(details);

    alert("Transaction Successfull");

    setEmail("");
    setAmount("");

    accountService
      .getBalance()
      .then((data) => dispatch(updateBalance(data.balance)));
  };

  return (
    <div className="border border-neutral-800 rounded-4xl p-10 w-full mx-auto h-full flex flex-col justify-between">
      <h2 className="block text-lg text-orange-200 font-medium leading-0 font-mono">
        Transaction
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm">
            Pay to:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-neutral-600 rounded-md"
            placeholder="Enter recipient's email"
            required
          />
        </div>
        <div>
          <label htmlFor="amount" className="block text-sm">
            Amount:
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-neutral-600 rounded-md"
            placeholder="Enter amount"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2"
          >
            <Send size={16} />
            {"Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Transaction;
