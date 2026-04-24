import { navLinks } from "../constants";

const NavBar = () => {
  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <img src="/logo.svg" alt="Logo" className="h-6 w-auto" />

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-[14px] font-medium">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-gray-700 transition hover:text-black"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button>
            <img src="/search.svg" alt="Search" className="h-5 w-5" />
          </button>

          <button>
            <img src="/cart.svg" alt="Cart" className="h-5 w-5" />
          </button>
        </div>

      </nav>
    </header>
  );
};

export default NavBar;