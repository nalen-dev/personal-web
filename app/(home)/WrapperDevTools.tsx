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
      <div className=" text-center font-commissioner font-bold mt-24 mb-7 text-xl">
        Development Tools
      </div>
      <div className="flex justify-center gap-28">
        <ul className="flex flex-col gap-3">
          <li className="flex text-base items-center gap-2">
            <SiTypescript />
            TypeScript
          </li>
          <li className="flex text-base items-center gap-2">
            <FaGolang />
            GoLang
          </li>
          <li className="flex text-base items-center gap-2">
            <SiCplusplus />
            C++
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li className="flex text-base items-center gap-2">
            <SiRedis />
            Redis
          </li>
          <li className="flex text-base items-center gap-2">
            <BiLogoPostgresql />
            PostgreSQL
          </li>
          <li className="flex text-base items-center gap-2">
            <SiMongodb />
            MongoDB
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li className="flex text-base items-center gap-2">
            <SiNginx />
            NginX
          </li>
          <li className="flex text-base items-center gap-2">
            <SiDocker />
            Docker
          </li>
          <li className="flex text-base items-center gap-2">
            <FaUbuntu />
            Ubuntu
          </li>
        </ul>
        <ul>
          <li className="flex text-base items-center gap-2">
            <BiLogoFigma />
            Figma
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WrapperDevTools;
