import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";

import Exceeding from "../components/Exceeding"
import Registration from "../components/Registration";
import Blog from "../components/Blog"


const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="section exceeding_all_expectations">
        <Exceeding />
      </section>
      <section className="section registration_panel buttom_header">
        <Registration />
      </section>
      <section className="section blog of news">
        <Blog />
      </section>
    </>
  );
};

export default Home;
