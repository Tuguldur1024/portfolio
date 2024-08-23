import NavigationLink from "./NavigationLink";
import CvButton from "./CvButton";
import LightIcon from "./icons/LightIcon";
import InfoIcon from "./icons/InfoIcon";

const links = [
  { name: "About" },
  { name: "Work" },
  { name: "Testimonials" },
  { name: "Contact" },
];
const Navbar = () => {
  return (
    <div class="flex items-center md:px-8 justify-between my-4 px-4">
      <p class="font-normal text-3xl font-rubikMono dark:text-gray-50	">
        Tuguldur
      </p>
      <div class="lg:flex justify-between gap-4 items-center hidden">
        <div class="flex justify-center gap-4">
          {links.map((link, index) => {
            return <NavigationLink key={index} text={link.name} />;
          })}
        </div>
        <div class="h-6 w-0 bg-gray-100 border"></div>
        <div class="flex items-center gap-4">
          <div onClick={toggleTheme}>
            <LightIcon />
          </div>
          <CvButton text="Download CV" />
        </div>
      </div>
      <div className=" lg:hidden">
        <InfoIcon />
      </div>
    </div>
  );
};
export default Navbar;
const toggleTheme = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
};
