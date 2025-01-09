import { BrowserRouter, Route, Routes } from "react-router";
import AboutUsPage from "../pages/AboutUs/AboutUsPage";
import HistoryPage from "../pages/History/HistoryPage";
import HomePage from "../pages/Home/HomePage";

const Init = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Init;