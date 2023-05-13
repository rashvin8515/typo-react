import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import Index from "./Pages/index";
import Index2 from "./Pages/index2/index2";
import Index3 from "./Pages/index3/index3";
import Footer from "./Components/footer/Footer";
import About_us_1 from "./Pages/about-us/About_us_1";
import About_us_2 from "./Pages/about-us/About_us_2";
import Team from "./Pages/team-page/TeamPage";
import PricingPage from "./Pages/pricing-page/PricingPage";
import FaqPage from "./Pages/faq-page/FaqPage";
import TeamSingle from "./Pages/team-single/TeamSingle";
import SignIn from "./Pages/sign-in/SignIn";
import SignUp from "./Pages/sign-up/SignUp";
import Maintenance from "./Pages/maintenance/Maintenance";
import ComingSoon from "./Pages/coming-soon/ComingSoon";
import ProductGrid from "./Pages/product-grid.jsx/ProductGrid";
import ProductList from "./Pages/product-list/ProductList";
import ProductSingle from "./Pages/product-single/ProductSingle";

function App() {
  const isSpecialRoute =
    location.pathname.includes("maintenance") ||
    location.pathname.includes("coming-soon") ||
    location.pathname.includes("error-404");
  return (
    <>
      {isSpecialRoute ? (
        <Routes>
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/error-404" element={<ErrorPage />} />
        </Routes>
      ) : (
        <div className="page-wrapper">
          <Header />
          <Routes>
            <Route path="/index" element={<Index />} />
            <Route path="/index-2" element={<Index2 />} />
            <Route path="/index-3" element={<Index3 />} />
            <Route path="/about-us-1" element={<About_us_1 />} />
            <Route path="/about-us-2" element={<About_us_2 />} />
            <Route path="/team" element={<Team />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/team-single" element={<TeamSingle />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/product-grid" element={<ProductGrid />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/product-single/:id" element={<ProductSingle />} />
            <Route path="/product-single" element={<ProductSingle />} />

            {/* <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
