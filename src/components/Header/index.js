import React, { useContext } from 'react';
import { AuthContext } from 'context/auth';
import { HiOutlineLogout } from "react-icons/hi"
import { HeaderContainerLog } from './styles';

import Logo from "assets/img/logo-marvel.png"

function Header() {
  const { logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout();
  }

  return (
    <HeaderContainerLog>
      <div>
        <img src={Logo} alt="Logo Marvel" />

        <button type='button'
          onClick={handleLogout}
        >Sair <span><HiOutlineLogout /></span></button>
      </div>
    </HeaderContainerLog>
  );
}

export default Header;