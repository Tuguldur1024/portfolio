import Navbar from "../Components/Navbar";
import Introduction from "../Components/Introduction";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Experience from "../Components/Experience";

const Home = () => {
  return (
    <div class="flex flex-col">
      <div class="mx-20">
        <Navbar />
        <Introduction />
      </div>
      <div class="bg-gray-50 px-28 py-24">
        <AboutMe />
      </div>
      <div class="px-28 py-24">
        <Skills />
      </div>
      <div class="bg-gray-50">
        <Experience />
      </div>
    </div>
  );
};
export default Home;
