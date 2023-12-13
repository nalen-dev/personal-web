import React from "react";

const NavHeader = () => {
  return (
    <div className="relative w-3/4 text-center mt-[50px] mx-auto">
      <div className="font-dm-mono font-light text-[13px] text-[#707070]">
        Hello, Welcome!
      </div>
      <div className="absolute right-0 bottom-0 text-base font-commissioner text-[#868686]">
        <ul className="flex gap-4">
          <li>Blog</li>
          <li>Components</li>
        </ul>
      </div>
    </div>
  );
};

export default NavHeader;
