import React, { useContext, useEffect, useState } from "react";
import { AlertContext } from "../../context/alert/AlertContextPro";
import { GithubContext } from "../../context/github/GithubContextPro";
import { FaRegTimesCircle } from "react-icons/fa";

const Alert = () => {
  const { state } = useContext(GithubContext);

  const { alert } = useContext(AlertContext);

  if (!!alert.msg === false && state.items.length === 0) return null;

  return (
    <div
      className={` overflow-hidden flex transition-all h-8 duration-300 justify-center  align-middle  `}
    >
      {alert.type === "error" && (
        <div className="flex justify-center items-center self-center gap-1">
          <FaRegTimesCircle className="mt-[3px]" />
          <p className="text-error">{alert.msg}</p>
        </div>
      )}
    </div>
  );
};

export default Alert;
