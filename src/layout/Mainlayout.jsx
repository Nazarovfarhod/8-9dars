import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Mainlayout() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-white ">
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <div className="sticky bottom-0 z-10 bg-white text-black">
        <Footer />
      </div>
    </>
  );
}
