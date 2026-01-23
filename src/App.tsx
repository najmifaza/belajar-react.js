import "./App.css";
import Welcome from "./components/welcome";
import Header from "./components/Header";
import Counter from "./components/Counter";
import LampToggle from "./components/LampToggle";
import { Route, Routes } from "react-router";
import TermsPage from "./Pages/TermsPage";
import { Home } from "lucide-react";
import HomePages from "./Pages/HomePages";
import NotFoundPage from "./Pages/NotFoundPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import ProductListPage from "./Pages/ProductListPage";
type Teacher = {
  name: string;
  job: string;
  year: number;
  id: number;
};

const teachers: Teacher[] = [
  {
    name: "Najmi",
    job: "student",
    year: 2000,
    id: 1,
  },
  {
    name: "udin",
    job: "kaprodi",
    year: 1991,
    id: 2,
  },
  {
    name: "ipung",
    job: "kajjur",
    year: 1999,
    id: 3,
  },
  {
    name: "ucup",
    job: "satpam",
    year: 1990,
    id: 4,
  },
];

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product/:productSlug" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
