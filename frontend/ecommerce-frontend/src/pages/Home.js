import { Carousel } from "flowbite-react";
import banner1 from '../images/banner1.jpg'; 
import banner2 from '../images/banner2.jpg'; 

export default function Home() {
  return (
    <Carousel>
      <img src="{banner1}}" alt="Banner 1" />
      <img src="{banner2}" alt="Banner 2" />
    </Carousel>
  );
}
