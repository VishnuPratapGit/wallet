import React from "react";
import { useSelector } from "react-redux";
import { UserRound, IdCard } from "lucide-react";

const UserInformation = () => {
  const user = useSelector((state) => state.auth.data);

  return (
    <div className="p-10 h-full max-w-sm mx-auto border border-neutral-700 rounded-4xl">
      <h2 className="text-lg font-medium font-mono leading-0">Information</h2>

      <div className="flex flex-col gap-3 mt-10 font-mono text-teal-600 text-sm">
        <div className="flex items-center gap-3">
          <UserRound size={15} className="text-neutral-400" />
          <h2 className="text-neutral-400">Name:</h2>
          <div> {user.name}</div>
        </div>
        <div className="flex items-center gap-3">
          <IdCard size={15} className="text-neutral-400" />
          <h2 className="text-neutral-400">Email:</h2>
          <div> {user.email}</div>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
