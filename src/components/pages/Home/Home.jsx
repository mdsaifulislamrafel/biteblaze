import Hero from "../../Hero/Hero";
import wave from "../../../assets/wave.svg"

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-116px)]">
      {/* Navbar start */}
      <Hero></Hero>
      {/* Navbar end */}
      <img className="absolute bottom-0 w-full" src={wave} alt="" />
    </div>
  );
};

Home.propTypes = {};

export default Home;
