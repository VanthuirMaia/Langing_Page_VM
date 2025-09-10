import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsappButton";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <WhatsAppButton /> {/* <-- agora é global */}
    </>
  );
}
