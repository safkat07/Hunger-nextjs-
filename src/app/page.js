"use client"
import BestSeller from "@/Components/Content/BestSeller/BestSeller";
import FamousBurgerSlider from "@/Components/Content/FamousBurgerSlider/FamousBurgerSlider";
import FreeDelivery from "@/Components/Content/FreeDelivery/FreeDelivery";
import Reviews from "@/Components/Content/Reviews/Reviews";
import Banner from "@/Components/Header/Banner/Banner";
import Navbar from "@/Components/Header/Navbar/Navbar";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const initializeLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
      });
    };

    initializeLocomotiveScroll();
  }, []);

  return (
    <div data-scroll-container>
      <Banner />
      <BestSeller />
      <FamousBurgerSlider />
      <FreeDelivery />
      <Reviews />
    </div>
  );
}
