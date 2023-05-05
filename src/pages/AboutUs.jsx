import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import coocking from "../../public/coocking.json";

function AboutUs() {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 pb-8">
        <div className="flex items-center mb-4">
          <Player autoplay loop={true} src={coocking}></Player>
        </div>
        <h2 className="text-xl font-bold mb-3"><span className="border-orange-500 border-b-2">About Us</span></h2>
        <p className="text-gray-700 text-base">
          Welcome to our food recipe website! Our team of experienced chefs and
          food enthusiasts is dedicated to bringing you delicious and healthy
          recipes that you can make in the comfort of your own home. We believe
          that cooking should be fun and accessible to everyone, and we want to
          share our passion for food with you. Whether you're a seasoned chef or
          just starting out, our recipes are designed to be easy to follow and
          use ingredients that you can find at your local grocery store. We also
          provide helpful tips and tricks to make your cooking experience even
          better.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
