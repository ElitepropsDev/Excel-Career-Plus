import React from "react";
import VideoSection from "../components/LandingPage/VideoSection";
import RegistrationForm from "../components/LandingPage/RegistrationForm";
import PaymentInfo from "../components/LandingPage/PaymentInfo";
import AdditionalInfo from "../components/LandingPage/AdditionalInfo";
import HeroSection from "../components/LandingPage/HeroSection";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <VideoSection />
      <RegistrationForm />
      <PaymentInfo />
      <AdditionalInfo />
    </div>
  );
};

export default LandingPage;
