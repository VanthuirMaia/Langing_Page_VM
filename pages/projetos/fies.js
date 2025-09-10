import { useRouter } from "next/router";

export default function ProjetoFies() {
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
          📊 Relatório de Análise do SISTEC – Escolas Técnicas
        </h1>
        <p className="text-gray-400 mb-8">
          Projeto desenvolvido em Python para gerar relatórios automáticos a
          partir dos dados do{" "}
          <span className="text-green-400 font-medium">SISTEC</span>, com
          análises estatísticas e visuais sobre as escolas técnicas brasileiras.
          O sistema inclui tabelas, gráficos e relatórios em PDF para apoiar
          estudos e decisões estratégicas.
        </p>

        {/* Prints */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <img
            src="/projetos/fies1.png"
            alt="Código Python"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/projetos/fies2.png"
            alt="Gráfico por Região"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/projetos/fies3.png"
            alt="Gráfico por UF"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/projetos/fies4.png"
            alt="Gráfico Cruzado Região x Dependência"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/projetos/fies5.png"
            alt="Gráfico Cruzado Região x Dependência"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/projetos/fies6.png"
            alt="Tabela Resumo"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Tecnologias */}
        <h2 className="text-2xl font-semibold mb-4">
          📚 Tecnologias Utilizadas
        </h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {["Python 3.10+", "pandas", "matplotlib", "fpdf2"].map((tec, i) => (
            <span
              key={i}
              className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-medium"
            >
              {tec}
            </span>
          ))}
        </div>

        {/* Estrutura */}
        <h2 className="text-2xl font-semibold mb-4">🗂️ Estrutura do Projeto</h2>
        <pre className="bg-gray-900 text-gray-300 p-4 rounded-lg text-left text-sm mb-8 overflow-x-auto">
          {`├── dados/
│   └── escolas_tecnicas.csv
├── imagens/
│   ├── grafico_regiao.png
│   ├── grafico_uf.png
│   ├── grafico_dependencia.png
│   └── grafico_cruzamento.png
├── scripts/
│   └── gerar_relatorio.py
├── README.md
└── relatorio_final.pdf`}
        </pre>

        {/* Detalhes das análises */}
        <h2 className="text-2xl font-semibold mb-4">
          📌 Detalhes das Análises
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-8">
          <li>Distribuição de escolas técnicas por região do Brasil.</li>
          <li>Top 10 estados com maior número de escolas técnicas.</li>
          <li>
            Quantidade por dependência administrativa (federal, estadual,
            municipal).
          </li>
          <li>Análise cruzada entre região e dependência administrativa.</li>
        </ul>

        {/* Repositório */}
        <a
          href="https://github.com/VanthuirMaia/Projeto_Analise_dados_SISTEC"
          target="_blank"
          className="bg-green-500 px-6 py-3 rounded-lg font-medium text-black hover:bg-green-600 transition"
        >
          🔗 Ver no GitHub
        </a>
      </div>
    </section>
  );
}
