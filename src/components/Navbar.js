import NavigationLink from "./NavigationLink";
import CvButton from "./CvButton";
import LightIcon from "./icons/LightIcon";
import InfoIcon from "./icons/InfoIcon";
import NightIcon from "./icons/NightIcon";

const links = [{ name: "About" }];
const cvFilePath = "/files/CV.pdf"; 

const Navbar = () => {
  return (
    <>
      {/* Navbar Section */}
      <div className="flex items-center md:px-8 justify-between py-4 px-4">
        <p className="font-normal text-start text-3xl font-rubikMono dark:text-gray-50">
          Tuguldur
        </p>
        <div className="lg:flex justify-between gap-4 items-center hidden">
          <div className="flex justify-center gap-4">
            {links.map((link, index) => (
              <NavigationLink key={index} text={link.name} />
            ))}
          </div>
          <div className="h-6 w-0 bg-gray-100 border"></div>
          <div className="flex items-center gap-4">
            <div onClick={toggleTheme}>
              <LightIcon className="dark:hidden" />
            </div>
            <div onClick={toggleTheme}>
              <NightIcon className="hidden dark:block" />
            </div>
            <a href={cvFilePath} download className="flex justify-center items-center bg-[#111827] rounded-lg text-white py-1.5 px-4 font-medium text-xl dark:bg-gray-50	 dark:text-gray-900">
              Download CV
            </a>
          </div>
        </div>

        <div className="lg:hidden">
          <label htmlFor="my-drawer" className="drawer-button cursor-pointer">
            <InfoIcon />
          </label>
        </div>
      </div>

      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content"></div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <li>
              <a href={cvFilePath} download className="flex justify-center items-center bg-[#111827] rounded-lg text-white py-1.5 px-4 font-medium text-xl dark:bg-gray-50	 dark:text-gray-900">
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
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
