export default function About() {
  return (
    <section
      id="sobre"
      className="py-20 bg-gray-950 text-gray-200 px-6 md:px-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Sobre <span className="text-green-500">Mim</span>
        </h2>
        <p className="mb-4">
          Sou um profissional apaixonado por tecnologia, com foco em{" "}
          <span className="text-green-400 font-medium">
            Engenharia de Dados e Desenvolvimento Backend
          </span>
          . Tenho experiência em pipelines de dados, APIs e sistemas robustos
          usando Python e Django.
        </p>
        <p className="mb-6">
          Também trabalho com{" "}
          <span className="text-green-400 font-medium">
            SQL, automação de processos e visualização de dados
          </span>
          , sempre buscando transformar dados em informações úteis para a tomada
          de decisão.
        </p>
      </div>
    </section>
  );
}
