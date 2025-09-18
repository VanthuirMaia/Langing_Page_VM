import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Nome */}
        <Link
          href="#hero"
          className="text-xl font-bold text-green-500"
          scroll={false}
        >
          VM
        </Link>

        {/* Links desktop */}
        <div className="hidden md:flex gap-6 items-center">
          <Link
            href="#hero"
            className="text-gray-200 hover:text-green-400 transition"
            scroll={false}
          >
            Home
          </Link>
          <Link
            href="#sobre"
            className="text-gray-200 hover:text-green-400 transition"
            scroll={false}
          >
            Sobre
          </Link>
          <Link
            href="#projetos"
            className="text-gray-200 hover:text-green-400 transition"
            scroll={false}
          >
            Projetos
          </Link>
          <Link
            href="#contato"
            className="text-gray-200 hover:text-green-400 transition"
            scroll={false}
          >
            Contato
          </Link>
        </div>

        {/* Botão hambúrguer mobile */}
        <button
          className="md:hidden text-2xl text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`bi ${menuOpen ? "bi-x" : "bi-list"}`}></i>
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 px-6 py-4 flex flex-col gap-4 text-center">
          <Link
            href="#hero"
            className="text-gray-200 hover:text-green-400 transition"
            onClick={() => setMenuOpen(false)}
            scroll={false}
          >
            Home
          </Link>
          <Link
            href="#sobre"
            className="text-gray-200 hover:text-green-400 transition"
            onClick={() => setMenuOpen(false)}
            scroll={false}
          >
            Sobre
          </Link>
          <Link
            href="#projetos"
            className="text-gray-200 hover:text-green-400 transition"
            onClick={() => setMenuOpen(false)}
            scroll={false}
          >
            Projetos
          </Link>
          <Link
            href="#contato"
            className="text-gray-200 hover:text-green-400 transition"
            onClick={() => setMenuOpen(false)}
            scroll={false}
          >
            Contato
          </Link>
        </div>
      )}
    </nav>
  );
}
