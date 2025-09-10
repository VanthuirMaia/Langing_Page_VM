export default function Footer() {
  return (
    <footer className="bg-black/90 text-gray-400 py-6 mt-0">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Vanthuir Maia</span>. Todos
          os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
