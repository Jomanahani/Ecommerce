import React from "react";
import { TbLogout } from "react-icons/tb";
import { useAuthContext } from "../../Context/authContext";

export default function LogoutButt() {
  const { logout } = useAuthContext();

  return (
    <>
      <TbLogout className="icon" onClick={logout} />
    </>
  );
}
