import { useEffect, useState } from "react";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import GithubContextPro from "./context/github/GithubContextPro";
import ThemeContextPro from "./context/github/theme/ThemeContextPro";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import BurgerMenu from "../src/components/layout/BurgerMenu";
import AlertContextPro from "./context/alert/AlertContextPro";
import Alert from "./components/layout/Alert";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <ThemeContextPro>
      <GithubContextPro>
        <AlertContextPro>
          <BrowserRouter>
            <div className="flex flex-col justify-between h-screen w-[100%] ">
              <Navbar />
              <main className="flex items-center justify-center duration-200 ease-linear flex-1 container mx-auto px-11 max-xl:px-6 max-lg:px-0 max-md:px-0 max-sm:px-0  pb-16 max-w-2xl:px-12 ">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/notfound" element={<NotFound />} />
                  <Route path="/user/:login" element={<User />} />

                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
              <BurgerMenu />
            </div>
          </BrowserRouter>
        </AlertContextPro>
      </GithubContextPro>
    </ThemeContextPro>
  );
}

export default App;
