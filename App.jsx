
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import { CartProvider } from "@/contexts/CartContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { DiscountProvider } from "@/contexts/DiscountContext";
import "./i18n/config";

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <DiscountProvider>
          <CartProvider>
            <Router>
              <div className="min-h-screen bg-background flex flex-col">
                <Navbar />
                <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
                  <div className="max-w-[2000px] mx-auto">
                    <AnimatePresence mode="wait">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                      </Routes>
                    </AnimatePresence>
                  </div>
                </main>
                <Toaster />
              </div>
            </Router>
          </CartProvider>
        </DiscountProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
