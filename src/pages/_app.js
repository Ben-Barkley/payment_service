import "../styles/globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "./login";

function MyApp({ Component, pageProps }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Manage auth state
  const router = useRouter();

  useEffect(() => {
    // Check auth state on load
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    } else {
      router.push("/login"); // Redirect to login page
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem("authToken", token); // Save token to localStorage
    setIsAuthenticated(true);
    router.push("/dashboard"); // Navigate to dashboard
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear token
    setIsAuthenticated(false);
    router.push("/login"); // Redirect to login page
  };

  if (!isAuthenticated && router.pathname !== "/login") {
    return null; // Prevent rendering until authentication is checked
  }

  return (
    <ThemeProvider>
      <LanguageProvider>
        {isAuthenticated && <Header onLogout={handleLogout} />}
        <Component {...pageProps} onLogin={handleLogin} />
        {isAuthenticated && <Footer />}
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default MyApp;
