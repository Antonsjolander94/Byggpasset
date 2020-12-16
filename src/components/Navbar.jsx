import { Link } from "gatsby";
import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import HamburgerSVG from "../assets/hamburger.inline.svg";
import LogoSVG from "../assets/byggpasset_logo.inline.svg";

const Header = tw.header`
flex items-center justify-between flex-wrap bg-black p-6
`;
const NavLogoWrapper = tw.div`
flex items-center flex-shrink-0 text-white mr-6
`;
const NavMobileButtonWrapper = tw.div`
block sm:hidden
`;
const NavMobileButton = tw.button`
flex items-center border-0 bg-transparent rounded text-white border-white hover:text-white hover:border-white cursor-pointer
`;
const NavMenuWrapper = tw.div`
w-full sm:flex sm:items-center sm:w-auto lg:visible 
`;

const NavMenu = tw.div`
text-sm sm:flex-grow
`;
const NavMenuLink = styled(Link)`
  ${tw`no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-white mr-4`}
`;

const Logo = styled(LogoSVG)`
  ${tw`fill-current w-48 mr-2`}
`;
const Hamburger = styled(HamburgerSVG)`
  ${tw`fill-current h-8 w-8`}
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Header>
      <NavLogoWrapper>
        <Logo />
      </NavLogoWrapper>
      <NavMobileButtonWrapper>
        <NavMobileButton onClick={() => setMenuOpen(!menuOpen)}>
          <Hamburger />
        </NavMobileButton>
      </NavMobileButtonWrapper>

      <NavMenuWrapper css={[!menuOpen ? tw`hidden` : tw``]}>
        <NavMenu>
          <NavMenuLink to="/">Docs</NavMenuLink>
          <NavMenuLink to="/">Examples</NavMenuLink>
          <NavMenuLink to="/">Blog</NavMenuLink>
        </NavMenu>
      </NavMenuWrapper>
    </Header>
  );
};

export default Navbar;
