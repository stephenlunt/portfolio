import { useState } from "react";
import { IconContext } from "react-icons";
import { IoMdClose, IoMdMenu } from "react-icons/io";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenuOpen() {
    setMenuOpen((prevValue) => !prevValue);
  }

  return (
    <header className="fixed z-50 w-full bg-zinc-200/30 dark:bg-zinc-900/30 backdrop-blur-md transition-colors duration-200 text-lg">
      <nav className="flex flex-col xs:flex-row gap-4 justify-between max-w-3xl mx-auto py-4 px-4">
        <div className="flex flex-row justify-between">
          <a href="/" className="menu-link">
            Home
          </a>
          <IconContext.Provider value={{ size: "20px" }}>
            <button onClick={toggleMenuOpen} className="xs:hidden">
              {menuOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </IconContext.Provider>
        </div>
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } xs:flex flex-col xs:flex-row gap-4`}
        >
          <a href="/blog/" className="menu-link">
            Blog
          </a>
          <a
            href="https://github.com/stephenlunt"
            target="_blank"
            rel="noopener noreferrer"
            className="menu-link"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
