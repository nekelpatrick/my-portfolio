import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "@/styles/Global";
import { Home } from "@/pages/home";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ThemeProvider from "@/providers/DarkMode";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle>
        <NavBar />
        <Home />
        <Footer />
      </GlobalStyle>
    </ThemeProvider>
  </React.StrictMode>
);
