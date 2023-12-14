import React from "react";

import Image, { StaticImageData } from "next/image";

import { LuChefHat } from "react-icons/lu";
import { GiCycle } from "react-icons/gi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { IoMdOpen } from "react-icons/io";

interface ProjectCardProps {
  img: StaticImageData;
  name: String;
  status: String;
}

const ProjectCard = ({ img, name, status }: ProjectCardProps) => {
  return (
    <div className="w-[400px] border-2 py-4 p-3 rounded-md">
      <div className="h-[175px] overflow-hidden">
        <Image className="border rounded-md" src={img} alt="project1" />
      </div>
      <div className="py-2 font-semibold font-base">{name.toUpperCase()}</div>
      <div className="flex gap-5 font-dm-mono text-[10px]">
        <div className="flex items-end gap-1">
          <LuChefHat size={18} />
          <div>Fullstack</div>
        </div>
        <div className="flex items-end gap-1 text-[#E0B417]">
          <GiCycle size={18} />
          <div>{status}</div>
        </div>
        <div className="flex items-end gap-1 text-[#D90B0B]">
          <HiOutlineStatusOnline size={18} />
          <div>Offline</div>
        </div>
        <div className="ml-20">
          <IoMdOpen size={22} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
