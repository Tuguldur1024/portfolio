import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Work from "../components/Work";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import Kebab from "../components/Kebab";
import Drawer from "../components/Drawer";

const Home = () => {
  return (
    <div class=" container max-w-screen-xl mx-auto ">
      <div class="px-20 sm:px-4 dark:bg-gray-950">
        <Drawer />
        <Navbar />
        <Introduction />
      </div>
      <div class="bg-gray-50 px-28 py-24 sm:py-16 sm:px-4 dark:bg-gray-900	">
        <AboutMe />
      </div>
      <div class="px-28 py-24 sm:py-16 sm:px-4 dark:bg-gray-950">
        <Skills />
      </div>
      <div class="bg-gray-50 px-20 py-24 sm:py-16 sm:px-4 dark:bg-gray-900">
        <Experience />
      </div>
      <div class="px-20 py-24 sm:py-16 sm:px-4 dark:bg-gray-950">
        <Work />
      </div>
      <div class="px-20 py-24 sm:py-16 sm:px-4 dark:bg-gray-950	">
        <GetInTouch />
      </div>
      <div class="bg-gray-50 py-6 px-20 sm:px-0 dark:bg-gray-900	">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
// const toggleTheme = () => {
//   if (document.documentElement.classList.contains("dark")) {
//     document.documentElement.classList.remove("dark");
//   } else {
//     document.documentElement.classList.add("dark");
//   }
// };
