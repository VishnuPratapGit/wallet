import { useEffect } from "react";
import { IndianRupee } from "lucide-react";
import accountService from "../services/account.services.js";
import { updateBalance } from "../redux/accountBalanceSlice.js";
import { useDispatch, useSelector } from "react-redux";

const AccountSection = () => {
  let balance = useSelector((state) => state.balance);
  const userStatus = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();
  balance = balance.toLocaleString();

  useEffect(() => {
    userStatus &&
      accountService
        .getBalance()
        .then((data) => dispatch(updateBalance(data.balance)));
  }, [userStatus]);

  return (
    <div className="p-10 h-full w-full mx-auto border border-neutral-800 rounded-4xl">
      <h2 className="text-lg font-medium leading-0 text-orange-200 font-mono">
        Balance
      </h2>
      <div className="mt-8 flex items-center gap-1 text-neutral-400">
        <IndianRupee size={28} />
        <h2 className="text-3xl leading-0 font-mono">{balance}</h2>
      </div>
    </div>
  );
};

export default AccountSection;
