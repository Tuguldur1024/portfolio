import NavigationLink from "./NavigationLink";
import CvButton from "./CvButton";
import LightIcon from "./icons/LightIcon";
import InfoIcon from "./icons/InfoIcon";
import Xmark from "./icons/Xmark";

const links = [
  { name: "About" },
  { name: "Work" },
  { name: "Testimonials" },
  { name: "Contact" },
];

<div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
      Open drawer
    </label>
  </div>
  <div className="drawer-side">
    <label
      htmlFor="my-drawer"
      aria-label="close sidebar"
      className="drawer-overlay"
    ></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li>
        <a>Sidebar Item 1</a>
      </li>
      <li>
        <a>Sidebar Item 2</a>
      </li>
    </ul>
  </div>
</div>;

const Navbar = () => {
  return (
    <div class="flex items-center md:px-8 justify-between py-4 px-4">
      <p class="font-normal text-start text-3xl font-rubikMono dark:text-gray-50	">
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
      <div className="lg:hidden drawer-button">
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
