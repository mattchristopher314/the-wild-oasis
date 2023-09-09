import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const imgSrc = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <StyledLogo>
      <NavLink to="/dashboard">
        <Img src={imgSrc} alt="Logo" />
      </NavLink>
    </StyledLogo>
  );
}

export default Logo;
