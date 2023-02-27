import React from "react";

import { useContext } from "react";
import { TbLogout } from "react-icons/tb";
import styled from "styled-components";
import { AuthContext } from "../../Context/authContext";


export const LogoutIcon = styled.div`
  color: #8b96a5;
  font-size: 1.5rem;
`;
export default function LogoutButt() {

  const [isAuthorized, setIsAuthorized] = useContext(AuthContext);

  const logout = () => {
    localStorage.clear();
    setIsAuthorized(false);
  };
  return (
    <LogoutIcon>
      <TbLogout className="icon" onClick={logout} />
    </LogoutIcon>

  );
}
