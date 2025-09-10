export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5587996075897"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-green-600 transition z-50"
    >
      <i className="bi bi-whatsapp text-xl"></i>
    </a>
  );
}
