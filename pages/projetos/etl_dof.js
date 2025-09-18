import { useRouter } from "next/router";

export default function ProjetoEtlDof() {
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
          ETL Transporte Florestal (DOF)
        </h1>
        <p className="text-gray-400 mb-8">
          Pipeline de <span className="text-green-400">ETL</span> desenvolvido
          em <span className="text-green-400">Python</span> para processar os
          dados do{" "}
          <span className="text-green-400">
            Documento de Origem Florestal (IBAMA)
          </span>
          . O sistema realiza a <span className="text-green-400">extração</span>{" "}
          de arquivos JSON, aplica{" "}
          <span className="text-green-400">transformações</span> com Pandas e
          gera arquivos <span className="text-green-400">CSV limpos</span>,
          prontos para análise. O objetivo é apoiar{" "}
          <span className="text-green-400">fiscalização ambiental</span>,
          identificar padrões de transporte e permitir{" "}
          <span className="text-green-400">insights de negócio</span>.
        </p>

        {/* Prints */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <img
            src="/projetos/etl-dof1.png"
            alt="Descrição do projeto"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/projetos/etl-dof2.png"
            alt="Fluzograma"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/projetos/etl-dof3.png"
            alt="Exemplo de CSV processado"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/projetos/etl-dof4.png"
            alt="Trecho do pipeline em Python"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Tecnologias */}
        <h2 className="text-2xl font-semibold mb-4">Tecnologias Utilizadas</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {["Python", "Pandas", "Poetry", "JSON", "CSV"].map((tec, i) => (
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
          <p className="text-gray-300">
            🔗 O código completo está disponível no GitHub:
          </p>
          <a
            href="https://github.com/VanthuirMaia/ETL_Transporte_Florestal"
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
