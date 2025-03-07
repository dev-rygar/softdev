import React from "react";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Careers from "./components/WhyJoinUs";
import LogoClouds from "./components/LogoClouds";
import Jobs from "./components/Jobs";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <LogoClouds />
        <Careers />
        <Jobs />
      </main>
      <Footer />
    </>
  );
};

export default App;
