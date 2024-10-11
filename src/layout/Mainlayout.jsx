import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

export default function Mainlayout() {
  return (
    <>
      <header className="sticky top-0 z-10">
        <Header />
      </header>
      <main className="flex h-full w-full">
        <SideBar />

        <div className="h-full w-full bg-slate-100 p-5">
          <div className="h-full w-full bg-white p-5 pb-0">
            <Outlet />
          </div>
        </div>
      </main>
      <div className="sticky bottom-0 z-10">
        <Footer />
      </div>
    </>
  );
}
