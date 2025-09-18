import {
  AcademicCapIcon,
  BriefcaseIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

export default function About() {
  return (
    <section
      id="sobre"
      className="py-20 bg-gray-950 text-gray-200 px-6 md:px-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-12">
          Sobre <span className="text-green-500">Mim</span>
        </h2>

        {/* Resumo curto */}
        <p className="mb-12 text-lg text-gray-300 max-w-3xl mx-auto">
          Sou <span className="text-green-400 font-medium">Vanthuir Maia</span>,{" "}
          <span className="text-green-400 font-medium">
            Residente em IA Generativa
          </span>{" "}
          pela UPE. Minha trajetória combina{" "}
          <span className="text-green-400 font-medium">
            Engenharia de Dados
          </span>
          , <span className="text-green-400 font-medium">Ciência de Dados</span>
          , <span className="text-green-400 font-medium">Machine Learning</span>{" "}
          e{" "}
          <span className="text-green-400 font-medium">
            Desenvolvimento Backend
          </span>
          . Atualmente, avalio apenas projetos freelancers de forma pontual, em
          paralelo à residência.
        </p>

        {/* Cards organizados */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Card Atualidade */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-green-500/30 transition flex flex-col">
            <RocketLaunchIcon className="h-10 w-10 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Hoje</h3>
            <ul className="space-y-2 text-gray-400 text-sm leading-relaxed">
              <li>📌 Residente em IA Generativa (UPE)</li>
              <li>📌 Dedicação exclusiva a pesquisa em IA aplicada</li>
              <li>
                📌 Ênfase em Data Science, Engenharia de Dados, Análise de Dados
                e IA Generativa
                <span className="block text-gray-500 text-xs ml-6">
                  (Machine Learning, Deep Learning, DataViz, PLN, Visão
                  Computacional, entre outros)
                </span>
              </li>

              <li>📌 Avalio apenas projetos freelancers pontuais</li>
            </ul>
          </div>

          {/* Card Formação */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-green-500/30 transition flex flex-col">
            <AcademicCapIcon className="h-10 w-10 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Formação</h3>
            <ul className="space-y-2 text-gray-400 text-sm leading-relaxed">
              <li>🎓 Mestrado em Engenharia da Computação (UPE)</li>
              <li>🎓 Esp. Tomada de Decisão Baseada em Evidências (UFRPE)</li>
              <li>🎓 Esp. Engenharia de Dados (Jornada de Dados)</li>
              <li>🎓 Tecnólogo em ADS (UNITINS)</li>
              <li>🎓 Técnico em ADS (ETE Ariano Vilar Suassuna)</li>
            </ul>
          </div>

          {/* Card Experiência */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-green-500/30 transition flex flex-col">
            <BriefcaseIcon className="h-10 w-10 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Experiências</h3>
            <ul className="space-y-2 text-gray-400 text-sm leading-relaxed">
              <li>💼 Instrutor de Tecnologia — SENAC (2024 - 2025)</li>
              <li>💼 Técnico de Informática — Positivo Tecnologia (2024)</li>
              <li>
                💼 Técnico em Telecomunicações — SEREDE / Oi (2020 – 2022)
              </li>
              <li>
                💼 Supervisor de Almoxarifado — PATROL / JVICENTE / AUGÚRIO
                (2009 – 2020)
              </li>
              <li>💼 Projetos acadêmicos e startups em dados</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
