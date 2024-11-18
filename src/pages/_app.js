import "../styles/globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  console.log(Component, pageProps, "working");
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default MyApp;
