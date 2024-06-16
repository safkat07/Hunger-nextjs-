"use client"
import BestSeller from "@/Components/Content/BestSeller/BestSeller";
import FamousBurgerSlider from "@/Components/Content/FamousBurgerSlider/FamousBurgerSlider";
import FreeDelivery from "@/Components/Content/FreeDelivery/FreeDelivery";
import LocationAndMaps from "@/Components/Content/LocationAndMaps/LocationAndMaps";
import Reviews from "@/Components/Content/Reviews/Reviews";
import SocialLinks from "@/Components/Content/SocialLinks/SocialLinks";
import Banner from "@/Components/Header/Banner/Banner";



export default function Home() {


  return (
    <div>
      <Banner />
      <BestSeller />
      <FamousBurgerSlider />
      <FreeDelivery />
      <Reviews />
      <SocialLinks />
      <LocationAndMaps />

    </div>
  );
}
