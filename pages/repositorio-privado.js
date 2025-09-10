export default function RepositorioPrivado() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[#0f0f0f] text-center px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        🚫 Repositório Privado
      </h1>

      <p className="text-gray-400 max-w-xl mb-6">
        Este projeto possui repositório privado por questões de{" "}
        <span className="text-green-400">segurança intelectual</span>. Para
        conhecer mais sobre as funcionalidades, ver prints ou solicitar uma
        demonstração, entre em contato diretamente comigo.
      </p>

      <a
        href="https://wa.me/5587996075897"
        target="_blank"
        className="bg-green-500 px-6 py-3 rounded-lg font-medium text-black hover:bg-green-600 transition"
      >
        Entre em Contato
      </a>
    </section>
  );
}
