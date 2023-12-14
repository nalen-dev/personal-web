import React from "react";

import {
  SiCplusplus,
  SiTypescript,
  SiRedis,
  SiMongodb,
  SiNginx,
  SiDocker,
} from "react-icons/si";

import { FaGolang, FaUbuntu } from "react-icons/fa6";

import { BiLogoPostgresql, BiLogoFigma } from "react-icons/bi";

const WrapperDevTools = () => {
  return (
    <div className="mt-24">
      <div className=" text-center font-dm-mono font-medium  mt-24 mb-7 text-xl">
        Development Tools
      </div>
      <div className="flex flex-wrap justify-center gap-x-28 gap-y-10">
        <ul className="flex flex-col gap-3">
          <li className="flex text-base items-center gap-2 ">
            <SiTypescript />
            <span className="text-[#707070]">TypeScript</span>
          </li>
          <li className="flex text-base items-center gap-2 ">
            <FaGolang />
            <span className="text-[#707070]">GoLang</span>
          </li>
          <li className="flex text-base items-center gap-2 ">
            <SiCplusplus />
            <span className="text-[#707070]">C++</span>
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li className="flex text-base items-center gap-2 ">
            <SiRedis />
            <span className="text-[#707070]">Redis</span>
          </li>
          <li className="flex text-base items-center gap-2 ">
            <BiLogoPostgresql />
            <span className="text-[#707070]">PostgreSQL</span>
          </li>
          <li className="flex text-base items-center gap-2 ">
            <SiMongodb />
            <span className="text-[#707070]">MongoDB</span>
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li className="flex text-base items-center gap-2 ">
            <SiNginx />
            <span className="text-[#707070]">NginX</span>
          </li>
          <li className="flex text-base items-center gap-2 ">
            <SiDocker />
            <span className="text-[#707070]">Docker</span>
          </li>
          <li className="flex text-base items-center gap-2 ">
            <FaUbuntu />
            <span className="text-[#707070]">Ubuntu</span>
          </li>
        </ul>
        <ul>
          <li className="flex text-base items-center gap-2 ">
            <BiLogoFigma />
            <span className="text-[#707070]">Figma</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WrapperDevTools;
