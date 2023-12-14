import NavHeader from "@/components/navigations/NavHeader";
import React from "react";

const page = () => {
  return (
    <div>
      <NavHeader path="/blogs" />
      <div className="container w-3/5">
        <div className="font-dm-mono text-3xl font-medium mt-5">Blog</div>
        <div className="text-gray-400 italic font-light mt-4">
          There is no articles yet, stay tune!
        </div>
      </div>
    </div>
  );
};

export default page;
