import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import { Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("./Layout"));
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Suspense fallback={<Loader></Loader>}>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="" element={<Home></Home>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="projects" element={<Projects></Projects>}></Route>
          <Route path="contact" element={<Contact></Contact>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
