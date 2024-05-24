import Category from "./components/Category";
import Hero from "./components/Hero";
import Tags from "./components/Tags";



export default function LandingPage() {
  return (
    <>
      <main className="lg:px-24 md:px-20 px-10 bg-gray-100 pt-16 md:h-[70vh] pb-14">
        <Hero />
      </main>
      <Tags />
      <Category/>
    </>
  );
}
