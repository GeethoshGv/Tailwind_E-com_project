import { hamburger } from "../assets/icons";
import { navbarLinks } from "../constans/index";

const Navbar = () => {
  return (
    <header className="padding-x py-4  z-[110] w-full  top-0 h-[8vh] backdrop-blur bg-white/50  sticky  ">
      <nav className="flex justify-between items-center max-container ">
        <ul className="flex flex-1 justify-center items-center gap-16  max-lg:hidden ">
          {navbarLinks.map((items) => (
            <li key={items.label}>
              <a
                href={items.href}
                className="text-lg text-slate-grey leading-normal"
              >
                {items.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
