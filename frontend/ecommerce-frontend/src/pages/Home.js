import { Carousel } from "flowbite-react";

export default function Home() {
  return (
    <Carousel className="h-96">
      <img src="/images/banner1.jpg" alt="Banner 1" className="object-cover w-full h-full" />
      <img src="/images/banner2.jpg" alt="Banner 2" className="object-cover w-full h-full" />
    </Carousel>
  );
}
