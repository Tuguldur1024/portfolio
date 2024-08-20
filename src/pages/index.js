import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Work from "../components/Work";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div class="flex flex-col">
      {/* <button onClick={toggleTheme}>toggle</button>
      <h1 className="bg-black text-white dark:bg-white dark:text-black">
        hello
      </h1> */}
      <div class="px-20 sm:px-4 dark:bg-gray-950">
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
      <div class="px-20 py-24 sm:py-16 sm:px-4">
        <Work />
      </div>
      <div class="px-20 py-24 sm:py-16 sm:px-4">
        <GetInTouch />
      </div>
      <div class="bg-gray-50 py-6 px-20 sm:px-0">
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
