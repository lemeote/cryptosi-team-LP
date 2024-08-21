import Image from "next/image";

import { ico_logo } from "@assets";
import { useRouter } from "next/navigation";

const headerTitle = [
  {
    title: "Home",
    src: "/",
  },
  {
    title: "Teams",
    src: "/teams",
  },
  {
    title: "Projects",
    src: "/projects",
  },
  {
    title: "Scrums",
    src: "/scrums",
  },
  {
    title: "Interviews",
    src: "/interviews",
  },
  {
    title: "Community",
    src: "/community",
  },
  {
    title: "Join us",
    src: "/join-us",
  },
  {
    title: "Contact",
    src: "/contact",
  },
];

const Header = () => {
  const router = useRouter();
  const gotopage = (src: string) => {
    router.push(src);
  };
  return (
    <div className="flex justify-between items-center w-full fixed py-5 px-10 gap-10 bg-opacity-80 bg-white z-50 top-0">
      <div className="cursor-pointer" onClick={() => gotopage("/")}>
        <Image src={ico_logo} alt="" />
      </div>
      <div className="flex justify-end gap-5 w-full items-center">
        {headerTitle.map((item, index) => (
          <div key={index} onClick={() => gotopage(item.src)} className="p-3 cursor-pointer hover:bg-[#36ee5e]">
            <span className="font-bold text-lg leading-5">{item.title}</span>
          </div>
        ))}
      </div>
      <div className="w-40"></div>
    </div>
  );
};

export default Header;
