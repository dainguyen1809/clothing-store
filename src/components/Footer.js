"use client";

import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-blackish text-gray-200 text-center py-4 pb-4 md:pb-14 md:bg-white md:text-blackish">
      Copyright &copy; Sick <br /> All Right Reserved {year}
    </div>
  );
};

export default Footer;
