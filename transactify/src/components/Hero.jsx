import styles from "../style";
import innovation from '../assets/innovation.png';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-10 px-2`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Transform <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Your Transactions</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        Today.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Whether you're making a purchase online, in-store, or on the go, our advanced payment solutions empower you to embrace the future of payments with confidence.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={innovation} alt="innovation" className="w-[90%] h-[90%] relative z-[5]" />
      </div>
    </section>
  );
};

export default Hero;
