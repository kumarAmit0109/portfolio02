import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div
      className="w-full min-h-screen overflow-x-hidden overflow-y-auto bg-white
      dark:bg-[#09090b] relative font-plusJakartaSans"
    >
      <div className="  fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] "></div>
      <Header></Header>
      <div className="absolute left-1/2 top-72 sm:top-0 z-10 -translate-x-1/2 blur-2xl sm:blur-3xl xl:-top-6">
        <div
          className="aspect-[1155/678] overflow-hidden w-screen xl:w-[72.1875rem] bg-gradient-to-tr dark:from-blue-500 dark:to-teal-500 from-yellow-500 to-pink-500 opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div className="relative z-20">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
