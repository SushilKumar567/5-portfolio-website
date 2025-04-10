import React from "react";
import "./index.css";
import "./Media.css";

import Header from "./Components/01-Header/01-Header";
import Hero from "./Components/02-Hero/01-Hero";
import Skills from "./Components/03-Skills/01-Skills";
import Projects from "./Components/04-Projects/01-Projects";
import About from "./Components/05-About/01-About";
import Contact from "./Components/06-Contact/01-Contact";
import Footer from "./Components/07-Footer/01-Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
