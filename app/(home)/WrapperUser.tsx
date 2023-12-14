import React from "react";

import Image from "next/image";

import imgProfile from "../../rsc/img/nalendra_profile.jpeg";

import { FaLinkedin, FaGithub } from "react-icons/fa6";

import { Button } from "@/components/ui/button";

const WrapperUser = () => {
  return (
    <div>
      <div className="relative bottom-4 text-center font-dm-mono font-light text-[13px] text-[#707070]">
        Hello, Welcome!
      </div>
      <div className="flex text-center justify-center mt-[50px]">
        <Image
          className="rounded-full"
          src={imgProfile}
          alt="profile"
          width={80}
        />
      </div>
      <div className="mt-5 font-commissioner text-[2.1rem] text-center">
        Nalendra Praja Manggala
      </div>
      <div className="text-center font-light mt-1 text-sm text-[#A0A0A0]">
        Full stack Web (Front-end, Back-End) and IoT
      </div>
      <div className="flex text-base gap-8 mt-12 justify-center">
        <FaGithub size={24} />
        <FaLinkedin size={24} />
      </div>
      <div className="text-center mt-5">
        <div className="font-dm-mono font-light mb-3 text-[13px] text-[#707070]">
          Bali, Indonesia
        </div>
        <Button variant={"outline"}> Contact Me </Button>
      </div>
    </div>
  );
};

export default WrapperUser;
