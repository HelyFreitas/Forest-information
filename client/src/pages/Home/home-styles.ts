import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;

  background-color: #ccc;
`;

export const Header = styled.header`
  width: 100%;
  height: auto;

  background-color: #1A202C;

  .logo-home {
    display: flex;
    align-items: center;

    padding: 5px;

    .title-home {
      font-family: "Josefin Sans", sans-serif;
      font-weight: bold;
      font-size: 40px;

      color: white;
    }

    .img-home {
      width: 80px;
      height: 90px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  height: auto;
  width: 100%;
  
  background-color: #fff;


  .sidebar-button {
    display: flex;
    align-items: center;

    padding: 6px;

    transition: all 0.5s;
    cursor: pointer;

    &:hover {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }
`;
