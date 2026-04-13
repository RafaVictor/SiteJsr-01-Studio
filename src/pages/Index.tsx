import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Reviews from "@/components/Reviews";
import CustomLab from "@/components/CustomLab";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div id="produtos">
        <ProductGrid />
      </div>
      <div id="custom-lab">
        <CustomLab />
      </div>
      <div id="avaliacoes">
        <Reviews />
      </div>
      <CartDrawer />
      <Footer />
    </div>
  );
};

export default Index;
