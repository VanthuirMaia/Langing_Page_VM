import { useEffect } from "react";
import Typed from "typed.js";

export default function Hero() {
  useEffect(() => {
    const typed = new Typed(".typed-text", {
      strings: [
        "Engenharia de Dados",
        "Data Science",
        "IA Generativa",
        "Análise de Dados",
        "Backend Developer",
        "Automação de Processos e Serviços",
      ],
      typeSpeed: 80, // mais lento na digitação
      backSpeed: 40, // velocidade ao apagar
      backDelay: 1500, // pausa antes de apagar
      startDelay: 500, // pequena pausa inicial
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-center h-screen bg-[#0f0f0f] px-8"
    >
      {/* Foto à esquerda */}
      <div className="md:w-1/3 flex justify-center md:justify-end mb-10 md:mb-0">
        <img
          src="/vanthuir.jpg"
          alt="Foto de Vanthuir Maia"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg border-4 border-green-500"
        />
      </div>

      {/* Texto à direita */}
      <div className="md:w-2/3 text-center md:text-left md:pl-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-wide">
          Vanthuir <span className="text-green-500">Maia</span>
        </h1>

        {/* Frase animada */}
        <p className="text-xl md:text-2xl text-gray-400 mb-10">
          <span className="typed-text"></span>
        </p>

        {/* Botões */}
        <div className="flex gap-4 justify-center md:justify-start">
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
      </div>
    </section>
  );
}
