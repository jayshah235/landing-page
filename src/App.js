import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import HeaderOutlet from "./pages/landing-page/header-outlet";
import ProductDetailsPage from "./pages/product-page";
import ViewAll from "./pages/viewall-page";
import ScrollToTop from "./scrolltotop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HeaderOutlet />}>
          <Route index element={<LandingPage />} />
          <Route path="/detail" element={<ProductDetailsPage />} />
          <Route path="/viewall" element={<ViewAll />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
