import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ScrollToTop.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ApplicationPage from "./pages/ApplicationPage.tsx";
import ClientsPage from "./pages/ClientsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";
import SurfaceFinishesPage from "./pages/SurfaceFinishesPage.tsx";
import CareerPage from "./pages/CareerPage.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";
import ProductDetailPage from "./pages/ProductDetailPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import BlogPostDetailPage from "./pages/BlogPostDetailPage.tsx";
import CataloguePage from "./pages/CataloguePage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/category/:categoryId" element={<ProductsPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/application" element={<ApplicationPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/finishes" element={<SurfaceFinishesPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:blogId" element={<BlogPostDetailPage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
