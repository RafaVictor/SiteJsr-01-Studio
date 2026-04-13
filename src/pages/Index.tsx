import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Reviews from "@/components/Reviews";
import CustomLab from "@/components/CustomLab";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <CustomLab />
        <Reviews />
      </main>
      <CartDrawer />
      <Footer />
    </div>
  );
};

export default Index;