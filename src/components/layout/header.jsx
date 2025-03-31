import Filter from "../home/filter/filter";
import heroImg from "../../assets/hero.jpeg";

const Header = () => {
  return (
    <header>
      <nav className="relative w-full py-[100px] flex flex-col items-center justify-center text-white text-center px-4">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="News Background"
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </div>
        <div className="relative z-10 max-w-4xl w-full">
          <h1 className="text-5xl font-extrabold drop-shadow-lg text-left">
            Hacker News
          </h1>
          <p className="text-xs mt-1 text-gray-300 text-left">
            Est. 1999, Bombay - Your Daily News Source
          </p>
          <Filter />
        </div>
      </nav>
    </header>
  );
};

export default Header;
