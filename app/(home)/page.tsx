import NavHeader from "@/components/navigations/NavHeader";
import WrapperUser from "./WrapperUser";
import WrapperProject from "./WrapperProject";
import WrapperDevTools from "./WrapperDevTools";

export default function Home() {
  return (
    <div className="">
      <NavHeader />
      <WrapperUser />
      <WrapperProject />
      <WrapperDevTools />
    </div>
  );
}
