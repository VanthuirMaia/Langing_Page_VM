import { useEffect } from "react";
import Typed from "typed.js";

export default function Hero() {
  useEffect(() => {
    const typed = new Typed(".typed-text", {
      strings: [
        "Engenharia de Dados",
        "Análise de Dados",
        "Backend Developer",
        "Automação de Processos",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-[#0f0f0f] text-center px-4">
      {/* Nome */}
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide">
        Vanthuir <span className="text-green-500">Maia</span>
      </h1>

      {/* Frase animada */}
      <p className="text-xl md:text-2xl text-gray-400 mb-8">
        <span className="typed-text"></span>
      </p>

      {/* Botões */}
      <div className="flex gap-4">
        <a
          href="#projetos"
          className="bg-green-500 px-6 py-3 rounded-lg font-medium text-black hover:bg-green-600 transition flex items-center gap-2"
        >
          <i className="bi bi-briefcase"></i> Ver Portfólio
        </a>
        <a
          href="#contato"
          className="border border-gray-500 px-6 py-3 rounded-lg font-medium text-white hover:bg-gray-800 transition flex items-center gap-2"
        >
          <i className="bi bi-envelope"></i> Contato
        </a>
      </div>
    </section>
  );
}
