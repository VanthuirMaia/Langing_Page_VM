export default function Contact() {
  return (
    <section
      id="contato"
      className="py-20 bg-gray-950 text-gray-200 px-6 md:px-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Entre em <span className="text-green-500">Contato</span>
        </h2>
        <p className="mb-8 text-gray-400">
          Gostou do que viu? Estou aberto a oportunidades de trabalho, parcerias
          e projetos freelancers. Entre em contato comigo pelas redes ou envie
          um e-mail diretamente.
        </p>

        {/* Botão principal */}
        <a
          href="mailto:vanthuir.dev@gmail.com"
          className="bg-green-500 text-black px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition"
        >
          Enviar E-mail
        </a>

        {/* Links sociais */}
        <div className="flex justify-center gap-6 mt-10 text-2xl">
          <a
            href="https://www.linkedin.com/in/vanthuir-maia-47767810b/"
            target="_blank"
            className="text-green-400 hover:text-green-300 transition"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/VanthuirMaia"
            target="_blank"
            className="text-green-400 hover:text-green-300 transition"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="mailto:vanthuir.dev@gmail.com"
            className="text-green-400 hover:text-green-300 transition"
          >
            <i className="bi bi-envelope"></i>
          </a>
          <a
            href="https://wa.me/5587996075897"
            target="_blank"
            className="text-green-400 hover:text-green-300 transition"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
