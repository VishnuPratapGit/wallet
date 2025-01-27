import { useEffect } from "react";
import { IndianRupee } from "lucide-react";
import accountService from "../services/account.services.js";
import { updateBalance } from "../redux/accountBalanceSlice.js";
import { useDispatch, useSelector } from "react-redux";

const AccountSection = () => {
  let balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();
  balance = balance.toLocaleString();

  useEffect(() => {
    accountService
      .getBalance()
      .then((data) => dispatch(updateBalance(data.balance)));
  }, []);

  return (
    <div className="p-10 h-full max-w-sm mx-auto border border-neutral-700 rounded-4xl">
      <h2 className="text-lg font-medium leading-0 font-mono">Balance</h2>
      <div className="mt-8 flex items-center gap-1 text-neutral-400">
        <IndianRupee size={28} />
        <h2 className="text-3xl leading-0 font-mono">{balance}</h2>
      </div>
    </div>
  );
};

export default AccountSection;
