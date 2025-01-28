import React from "react";

const TransactionDetails = ({ heading, name, t }) => {
  return (
    <div className="flex flex-col gap-3">
      <h2
        className={`text-sm ${
          heading === "Paid to" ? "text-rose-400" : "text-emerald-300"
        }`}
      >
        {heading}
      </h2>
      <div className="flex justify-between uppercase text-lg text-orange-100">
        <h2>{name}</h2>
        <span>₹{t.amount.toLocaleString()}</span>
      </div>
      <div className="font-mono font-bold text-sm text-neutral-500">
        {new Date(t.date).toLocaleDateString("en-GB", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </div>
  );
};

export default TransactionDetails;
