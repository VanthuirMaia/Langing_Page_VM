import { useRouter } from "next/router";

export default function ProjetoWebScraping() {
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
        <h1 className="text-4xl font-bold mb-6">🕸️ Web Scraping com Python</h1>
        <p className="text-gray-400 mb-8">
          Projeto prático para{" "}
          <span className="text-green-400">extrair, tratar e visualizar</span>{" "}
          dados da web de forma automatizada. Utilizando{" "}
          <span className="text-green-400">Scrapy</span> para coleta,
          <span className="text-green-400"> Pandas</span> para organização,
          <span className="text-green-400"> SQLite</span> para armazenamento e{" "}
          <span className="text-green-400">Streamlit</span> para criação de um
          dashboard interativo.
        </p>

        {/* Prints */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <img
            src="/projetos/webscraping1.png"
            alt="Descrição do Projeto"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/projetos/webscraping2.png"
            alt="Script de Scrapy"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/projetos/webscraping3.png"
            alt="Telegram Bot"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/projetos/webscraping4.png"
            alt="Página ML"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/projetos/webscraping5.png"
            alt="Script Send Telegram"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/projetos/webscraping6.png"
            alt="dataBase"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Tecnologias */}
        <h2 className="text-2xl font-semibold mb-4">Tecnologias Utilizadas</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            "Python",
            "Scrapy",
            "Pandas",
            "SQLite",
            "Streamlit",
            "VSCode",
            "Git/GitHub",
          ].map((tec, i) => (
            <span
              key={i}
              className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-medium"
            >
              {tec}
            </span>
          ))}
        </div>

        {/* Repositório GitHub */}
        <div className="p-4 bg-gray-800 rounded-lg text-center">
          <p className="text-gray-300">🔗 Código disponível no GitHub:</p>
          <a
            href="https://github.com/VanthuirMaia/Project_WebScraping_Python_IA"
            target="_blank"
            className="inline-block mt-3 px-4 py-2 bg-green-500 text-black font-medium rounded hover:bg-green-400 transition"
          >
            Ver Repositório
          </a>
        </div>
      </div>
    </section>
  );
}
