import { useRouter } from "next/router";

export default function ProjetoMiroute() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-[#0f0f0f] text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Botão Voltar */}
        <button
          onClick={() => router.back()}
          className="mb-6 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition cursor-pointer"
        >
          ← Voltar
        </button>

        {/* Título */}
        <h1 className="text-4xl font-bold mb-6">
          🌱 MiRoute – Qualidade e Rastreabilidade do Leite
        </h1>
        <p className="text-gray-400 mb-8">
          A <span className="text-green-400 font-medium">MiRoute</span> é uma
          startup que desenvolve soluções tecnológicas para a cadeia produtiva
          do leite, com foco em{" "}
          <span className="text-green-400 font-medium">rastreabilidade</span>,{" "}
          <span className="text-green-400 font-medium">qualidade</span> e{" "}
          <span className="text-green-400 font-medium">
            tomada de decisão baseada em dados
          </span>
          .
        </p>

        {/* Funcionalidades */}
        <h2 className="text-2xl font-semibold mb-4">
          ⚙️ Funcionalidades Principais
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li>Controle de qualidade do leite em tempo real.</li>
          <li>Rastreabilidade completa desde o produtor até o laticínio.</li>
          <li>Dashboards interativos para análise de indicadores.</li>
          <li>Integração com sistemas externos via APIs RESTful.</li>
          <li>Alertas inteligentes para não conformidades.</li>
        </ul>

        {/* Tecnologias */}
        <h2 className="text-2xl font-semibold mb-4">
          🛠️ Tecnologias Utilizadas
        </h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            "Django Rest Framework",
            "PostgreSQL",
            "Flutter",
            "Power BI",
            "Python",
          ].map((tec, i) => (
            <span
              key={i}
              className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-medium"
            >
              {tec}
            </span>
          ))}
        </div>

        {/* Benefícios */}
        <h2 className="text-2xl font-semibold mb-4">🚀 Benefícios</h2>
        <p className="text-gray-300 mb-8">
          Com a MiRoute, produtores, transportadores e laticínios ganham{" "}
          <span className="text-green-400 font-medium">segurança</span> na
          qualidade do leite, redução de perdas logísticas e maior{" "}
          <span className="text-green-400 font-medium">
            eficiência operacional
          </span>
          .
        </p>

        {/* Repositório Privado */}
        <div className="p-4 bg-gray-800 rounded-lg text-center mb-8">
          <p className="text-gray-300">
            🚫 Este projeto possui repositório privado por questões de{" "}
            <span className="text-green-400">segurança intelectual</span>.
          </p>
        </div>

        {/* Link para o site oficial */}
        <a
          href="https://www.miroute.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 px-6 py-3 rounded-lg font-medium text-black hover:bg-green-600 transition inline-block"
        >
          🌐 Acessar o site oficial
        </a>
      </div>
    </section>
  );
}
