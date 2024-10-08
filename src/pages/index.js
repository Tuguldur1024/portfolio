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
      <div class="sm:px-8 px-4 md:px-12 lg:px-20 dark:bg-gray-950">
        <Navbar />
        <Introduction />
      </div>
      <div class="bg-gray-50 py-16 px-4 sm:px-8 md:px-12 md:py-24 lg:px-20 dark:bg-gray-900	">
        <AboutMe />
      </div>
      <div class="px-4 py-16 md:py-24 md:px-20 dark:bg-gray-950">
        <Skills />
      </div>
      <div class="bg-gray-50 py-16 px-4 sm:px-8 md:px-12 md:py-24 lg:px-20 dark:bg-gray-900">
        <Experience />
      </div>
      <div class="py-16 px-4 sm:px-8 md:px-12 md:py-24 lg:px-20 dark:bg-gray-950">
        <Work />
      </div>
      <div class="py-16 px-4 sm:px-8 md:px-12 md:py-24 lg:px-20 dark:bg-gray-950">
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
