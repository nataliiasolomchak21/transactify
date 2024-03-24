import { creditcard } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a perfect card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
      Say goodbye to the hassle of endless research and uncertainty – Transactify streamlines the process, 
      providing you with personalized recommendations and transparent insights. 
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={creditcard} alt="creditcard" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;