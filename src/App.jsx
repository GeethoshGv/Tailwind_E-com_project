import {
  Hero,
  PopularProduct,
  Services,
  SpecialOffer,
  SuperQuality,
  Featured,
  Footer,
} from "./section/index";

import Navbar from "./components/Navbar";

const App = () => (
  <main className="relative">
    <Navbar />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding bg-[rgb(255,255,255)]">
      <PopularProduct />
    </section>
    <section className="padding bg-[rgb(230,255,247)]">
      <SuperQuality />
    </section>
    <section className="padding  bg-[rgb(255,255,255)]">
      <SpecialOffer />
    </section>
    <section className="padding bg-[rgb(230,255,247)]">
      <Featured />
    </section>
    <section className="padding-x py-10 bg-[rgb(255,255,255)] ">
      <Services />
    </section>
    <section className="padding bg-black padding-x padding-t pb-8 ">
      <Footer />
    </section>
  </main>
);

export default App;
