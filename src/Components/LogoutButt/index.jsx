import React from 'react'
import { useContext } from 'react';
import { TbLogout } from "react-icons/tb";
import { AuthContext } from '../../Context/authContext';

export default function LogoutButt() {
  const [isAuthorized, setIsAuthorized] = useContext(AuthContext);

    const logout = () => {
        localStorage.clear();
        setIsAuthorized(false);
      };

  return (
    <>
          <TbLogout
            className="icon"
            onClick={logout}
          />
    </>
  )
}
