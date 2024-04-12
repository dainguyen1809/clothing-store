import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <div className="navbar__link relative">HOME</div>
          <div className="navbar__link relative">CATEGORIES</div>
          <div className="navbar__link relative">MEN'S</div>
          <div className="navbar__link relative">WOMAN'S</div>
          <div className="navbar__link relative">JEWELRY</div>
          <div className="navbar__link relative">PERFUME</div>
          <div className="navbar__link relative">BLOG</div>
          <div className="navbar__link relative">HOST OFFERS</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
