import Image from "next/image";

import { img_mission } from "@assets";

const MainMission = () => {
  return (
    <div className="flex justify-stretch gap-14">
      <div className="w-1/2">
        <Image
          src={img_mission}
          alt="image-carousel"
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 gap-6">
        <span className=" text-main text-5xl font-bold">
          CREATIVE BUILDING ESPORTS COMPANYM
        </span>
        <span className="text-2xl">
          Our team is made up of talented developers and writers We are proud to
          say that we are the first and only team in the Esports world that
          exclusively competes in hackathons based on crypto currency
          technology. Our team is dedicated to staying at the forefront of the
          latest trends and technologies in the crypto space, and we bring this
          expertise to every hackathon we compete in.who are passionate about
          exploring the potential of blockchain and cryptocurrency.
        </span>
      </div>
    </div>
  );
};

export default MainMission;
