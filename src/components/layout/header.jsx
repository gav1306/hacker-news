import { Separator } from "@/components/ui/separator";

const Header = () => {
  return (
    <header className="bg-secondary">
      <nav className=" flex items-center justify-center p-2 fixed top-0 inset-x-0 z-10 backdrop-blur-xs w-full max-w-7xl m-auto">
        <div className="flex flex-col gap-2">
          <h1 className="capitalize font-semibold text-6xl tracking-normal underline decoration-2 underline-offset-4">
            hacker news
          </h1>
          <p className="capitalize text-center font-secondary">bombay , 1999</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
