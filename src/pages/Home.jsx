import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InquiryForm from "../components/InquiryForm";
import Navigation from "../components/Navigation";
import ProductCarousel from "../components/ProductCarousel";
import ProductVideos from "../components/ProductVideos";
import ProductsServices from "../components/ProductsServices";
import RatingsReviews from "../components/RatingsReviews";
import React from "react";
import ShowcaseGallery from "../components/ShowcaseGallery";
import WelcomeSection from "../components/WelcomeSection";

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <ProductCarousel />
      <ProductsServices />
      <WelcomeSection />
      <ProductVideos />
      <InquiryForm />
      <ShowcaseGallery />
      <RatingsReviews />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
