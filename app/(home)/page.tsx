import NavHeader from "@/components/navigations/NavHeader";
import WrapperUser from "./WrapperUser";
import WrapperProject from "./WrapperProject";
import WrapperDevTools from "./WrapperDevTools";
import WrapperExperiences from "./WrapperExperiences";

export default function Home() {
  return (
    <div className="">
      <NavHeader path="/" />
      <WrapperUser />
      <WrapperProject />
      <WrapperDevTools />
      <WrapperExperiences />
      <footer className="font-dm-mono text-[#868686] text-base font-light text-right my-14 mr-16">
        © 2023 - nalendev
      </footer>
    </div>
  );
}
