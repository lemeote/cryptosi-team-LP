import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { img_carousel } from "@assets";

const SubItem = () => {
  return (
    <div className="flex justify-stretch gap-14">
      <div className="flex flex-col justify-center items-center w-1/2 gap-6">
        <span className=" text-main text-5xl font-bold">
          WE BUILD YOUR DREAM
        </span>
        <span className="text-2xl">
          Welcom to Cryptosi Team, an Esports team dedicated to competing in
          hackathons focused on crypto currency technology
        </span>
        <div className="px-8 py-4 bg-[#FF5E14] rounded-3xl flex justify-center items-center">
          Contact us
        </div>
      </div>
      <div className="w-1/2">
        <Image
          src={img_carousel}
          alt="image-carousel"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

const MainCarousel = () => {
  return (
    <Carousel className="w-full pt-12">
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <SubItem />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MainCarousel;
