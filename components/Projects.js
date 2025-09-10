export default function Projects() {
  const projetos = [
    {
      titulo: "Análise de Dados do FIES 2021 - UFRPE",
      descricao:
        "Projeto de análise de dados do Fundo de Financiamento Estudantil, utilizando Python, Pandas e visualização com Matplotlib.",
      stack: ["Python", "Pandas", "Matplotlib"],
      link: "https://github.com/VanthuirMaia", // ajuste com link real
      imagem: "/projetos/fies.png", // coloque no /public/projetos
    },
    {
      titulo: "ERP Compras (Django)",
      descricao:
        "Sistema de gestão de solicitações e pedidos, desenvolvido com Django Rest Framework e PostgreSQL.",
      stack: ["Django", "PostgreSQL", "DRF"],
      link: "https://github.com/VanthuirMaia",
      imagem: "/projetos/erp.png",
    },
    {
      titulo: "MiRoute",
      descricao:
        "Plataforma para controle de qualidade e rastreabilidade de leite, com foco em análise de dados e logística.",
      stack: ["Django", "Flutter", "PostgreSQL"],
      link: "https://github.com/VanthuirMaia",
      imagem: "/projetos/miroute.png",
    },
  ];

  return (
    <section
      id="projetos"
      className="py-20 bg-gray-900 text-gray-100 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          Meus <span className="text-green-500">Projetos</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projetos.map((projeto, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              {/* Imagem */}
              <img
                src={projeto.imagem}
                alt={projeto.titulo}
                className="w-full h-40 object-cover"
              />

              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {projeto.titulo}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {projeto.descricao}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {projeto.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-green-400 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={projeto.link}
                  target="_blank"
                  className="text-green-400 font-medium hover:underline"
                >
                  Ver mais →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
