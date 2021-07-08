import "../styles/globals.css";
import PageStructure from "../components/PageStructure";

function MyApp({ Component, pageProps }) {
  return (
    <PageStructure>
      <Component {...pageProps} />
    </PageStructure>
  );
}

export default MyApp;
