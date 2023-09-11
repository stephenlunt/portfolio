import { useState } from "react"
import { MdMenu, MdClose } from "react-icons/md"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenuOpen() {
    setMenuOpen((prevValue) => !prevValue)
  }

  return (
    <header className="fixed z-50 w-full bg-zinc-900/30 backdrop-blur-md transition-colors duration-200">
      <nav className="flex flex-col xs:flex-row gap-4 justify-between max-w-3xl mx-auto py-4 px-4">
        <div className="flex flex-row justify-between">
          <a href="/" className="menu-link">
            Home
          </a>
          <button onClick={toggleMenuOpen} className="xs:hidden">
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } xs:flex flex-col xs:flex-row gap-4`}
        >
          <a href="/blog" className="menu-link">
            Blog
          </a>
          <a href="/projects" className="menu-link">
            Projects
          </a>
          <a
            href="https://github.com/stephenlunt"
            target="_blank"
            rel="noopener"
            className="menu-link"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  )
}
