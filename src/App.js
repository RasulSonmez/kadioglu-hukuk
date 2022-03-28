import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About";
import Practice from "./pages/Practice";
import Attorneys from "./pages/Attorneys";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="practice" element={<Practice />} />
        <Route path="attorneys" element={<Attorneys />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blogdetail" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
