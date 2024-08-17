import Navbar from "../Components/Navbar";
import Introduction from "../Components/Introduction";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Experience from "../Components/Experience";
import Work from "../Components/Work";
import GetInTouch from "../Components/GetInTouch";
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
      <div class="bg-gray-50 px-20 py-24">
        <Experience />
      </div>
      <div class="px-20 py-24">
        <Work/>
      </div>
      <div class="px-20 py-24">
        <GetInTouch/>
      </div>
    </div>
  );
};
export default Home;
