import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState("");

  const handleCopy = (email) => {
    navigator.clipboard.writeText(email);
    setCopied(email);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <section
      id="contato"
      className="py-20 bg-gray-950 text-gray-200 px-6 md:px-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Entre em <span className="text-green-500">Contato</span>
        </h2>
        <p className="mb-6 text-gray-400">
          Gostou do que viu? Estou aberto a oportunidades de trabalho, parcerias
          e projetos freelancers. Você pode me chamar pelas redes sociais ou
          utilizar os e-mails abaixo:
        </p>

        {/* Endereços de e-mail */}
        <div className="mb-10">
          <p className="text-lg mb-4">
            <span className="font-semibold text-green-400">E-mails:</span>
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {["vanmaiasf@gmail.com", "vanthuir.dev@gmail.com"].map((email) => (
              <button
                key={email}
                onClick={() => handleCopy(email)}
                className="bg-gray-800 px-4 py-2 rounded-lg text-gray-200 font-mono hover:bg-gray-700 transition"
              >
                {email}
                {copied === email && (
                  <span className="ml-2 text-green-400 text-sm">
                    ✔ Copiado!
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Links sociais */}
        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/vanthuir-maia-47767810b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/VanthuirMaia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.instagram.com/vanthuirmaia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://wa.me/5587996075897"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
