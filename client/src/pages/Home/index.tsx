import * as S from "./home-styles";

import Logo from "../../assets/logo.png";
import { useState } from "react";

import { FaBars } from "react-icons/fa";
import { Sidebar } from "../../components/Sidebar";

export const Home = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSiderbar = () => setSidebar(!sidebar);

  return (
    <S.HomeContainer>
      <S.Header>
        <section className="logo-home">
          <img className="img-home" src={Logo} alt="" />
          <h1 className="title-home">AboutEcology</h1>
        </section>
      </S.Header>
      <S.Nav>
        <div className="sidebar-button" onClick={showSiderbar}>
          <FaBars size={25} color="#455d22" />
        </div>
        {sidebar && <Sidebar active={setSidebar} />}
      </S.Nav>
    </S.HomeContainer>
  );
};
