import { useRouter } from "next/router";

export default function ProjetoErp() {
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
        <h1 className="text-4xl font-bold mb-6">Axio - ERP Compras</h1>
        <p className="text-gray-400 mb-8">
          Sistema desenvolvido em <span className="text-green-400">Django</span>{" "}
          para otimizar o fluxo de{" "}
          <span className="text-green-400">solicitações de compras</span>,
          emissão de pedidos e gerenciamento de fornecedores. Conta com um fluxo
          de aprovação em múltiplas etapas, anexo de notas fiscais e
          notificações para os responsáveis, garantindo{" "}
          <span className="text-green-400">transparência</span> e{" "}
          <span className="text-green-400">eficiência</span> nos processos.
        </p>

        {/* Prints */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <img
            src="/projetos/erp1.png"
            alt="Página de Login"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/projetos/erp2.png"
            alt="Script Base"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/projetos/erp3.png"
            alt="Menu lateral"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/projetos/erp4.png"
            alt="Seção Pedidos"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/projetos/erp5.png"
            alt="Seção Solicitações"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/projetos/erp6.png"
            alt="Fluxo de Aprovação ERP"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Tecnologias */}
        <h2 className="text-2xl font-semibold mb-4">Tecnologias Utilizadas</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {["Python", "Django", "PostgreSQL", "AdminLTE", "Bootstrap"].map(
            (tec, i) => (
              <span
                key={i}
                className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-medium"
              >
                {tec}
              </span>
            )
          )}
        </div>

        {/* Repositório Privado */}
        <div className="p-4 bg-gray-800 rounded-lg text-center">
          <p className="text-gray-300">
            🚫 Este projeto possui repositório privado por questões de{" "}
            <span className="text-green-400">segurança intelectual</span>.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Entre em contato para mais informações ou demonstrações.
          </p>
        </div>
      </div>
    </section>
  );
}
