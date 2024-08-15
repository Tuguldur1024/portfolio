import NavigationLink from "./NavigationLink";
import CvButton from "./CvButton";
import LightIcon from "./icons/LightIcon";
let links = [
  { name: "About" },
  { name: "Work" },
  { name: "Testimonials" },
  { name: "Contact" },
];

const Navbar = () => {
  return (
    <div class="flex justify-center items-center px-8 justify-between my-4">
      <p class="font-normal text-3xl"> Tuguldur </p>
      <div class="flex justify-between gap-4 items-center">
        <div class="flex justify-center gap-4">
          {links.map((link) => {
            return <NavigationLink text={link.name} />;
          })}
        </div>
        <div class="h-6 w-0 bg-gray-100 border"></div>
        <div class="flex items-center gap-4">
          <div>
            <LightIcon />
          </div>
          <CvButton text="Download CV" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
