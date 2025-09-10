const projetos = [
  {
    slug: "erp",
    titulo: "ERP Compras (Axio)",
    descricao:
      "Sistema em Django para gestão de solicitações, pedidos, fornecedores e aprovações.",
    imagem: "/projetos/erp1.png",
  },
  {
    slug: "fies",
    titulo: "Análise de Dados do SISTEC - Escolas Técnicas",
    descricao:
      "Exploração de dados do SISTEC utilizando Python, Pandas e visualização com Matplotlib.",
    imagem: "/projetos/fies.png",
  },
  {
    slug: "miroute",
    titulo: "MiRoute",
    descricao:
      "Solução para rastreabilidade e controle de qualidade do leite, integrando análise de dados e APIs.",
    imagem: "/projetos/miroute.png",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-20 bg-[#0f0f0f] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Projetos</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projetos.map((projeto, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-green-500/30 transition"
            >
              <img
                src={projeto.imagem}
                alt={projeto.titulo}
                className="rounded mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{projeto.titulo}</h3>
              <p className="text-gray-400 mb-4">{projeto.descricao}</p>
              <a
                href={`/projetos/${projeto.slug}`}
                className="text-green-400 hover:text-green-300"
              >
                Ver Projeto →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
