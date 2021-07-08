import Header from "./Header";
import Footer from "./Footer";

export default function PageStructure({ children }) {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
