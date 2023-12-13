import React from "react";

import { IoSchoolSharp } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";

const WrapperExperiences = () => {
  return (
    <div className="mt-[7rem]">
      <div className=" font-commissioner font-bold text-center mt-24 mb-7 text-xl">
        Education and Experiences
      </div>
      <div className="flex items-center justify-center gap-28  w-4/6 mx-auto">
        <div className="flex-col flex gap-4">
          <div className="bg-[#1F2937] text-white py-4 pl-10 pr-4 w-[200px] rounded-lg relative">
            <div className="font-commissioner text-base">
              Udayana University{" "}
            </div>
            <div className="text-xs font-light">Electrical Engineering</div>
            <span className="absolute top-4 left-3">
              <IoSchoolSharp size={20} />
            </span>
          </div>
          <div className="bg-[#1F2937] text-white py-4 pl-10 pr-4 w-[200px]  rounded-lg relative">
            <div className="font-commissioner text-base">CakepLabs</div>
            <div className="text-xs font-light">Back-end Developer</div>
            <span className="absolute top-4 left-3">
              <MdOutlineWork size={20} />
            </span>
          </div>
          <div className="bg-[#1F2937] text-white py-4 pl-10 pr-4 w-[200px] rounded-lg relative">
            <div className="font-commissioner text-base">Binar Avademy</div>
            <div className="text-xs font-light">Back-end Developer</div>
            <span className="absolute top-4 left-3">
              <PiCertificateBold size={20} />
            </span>
          </div>
        </div>

        <div className="font-dm-mono text-[34px] w-3/5 font-normal">
          Extensive experience and a robust educational background,
          <div className="text-[#868686] font-light text-base mt-[-4px]">
            supported by CV and certificates.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrapperExperiences;
