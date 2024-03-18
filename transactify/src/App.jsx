import React from "react";
import styles from './style'
import { Billing, Business, CardDeal, Clients, CTA, Footer, NavBar, Stats, Testimonials, Hero } from "./components";

// To transform words into components, click on first one word, hold Alt
// Keep double-clicking on each new word
// Press Ctrl + left arrow key, open the tag
// Hold Ctrl + arrow right and close the component
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <Hero />
    </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <CTA />
      <Footer />
    </div>
    </div>
  </div>
);

export default App;
