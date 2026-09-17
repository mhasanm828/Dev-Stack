import { Suspense } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Technology from "./components/technology/Technology";
import type { ITechnology } from "./types/technologyType";
import { ToastContainer } from "react-toastify";

const technologysFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const technologysPromise = technologysFetch();

  return (
    <>
      <Nav />
      <Hero />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Technology technologysPromise={technologysPromise} />
        
      </Suspense>

      <Footer />



        <ToastContainer
    position="bottom-right"
    autoClose={2000}
    newestOnTop
    closeOnClick
    pauseOnHover
  />

    </>
  );
}

export default App;