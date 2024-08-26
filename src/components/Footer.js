import CopyRightIcon from "./icons/CopyRightIcon";
const Footer = () => {
  return (
    <div class="flex items-center gap-2 justify-center">
      <CopyRightIcon className="dark:hidden" />
      <CopyRightIcon className="hidden dark:block" color="white" />
      <p class="font-normal text-gray-600	text-sm dark:text-gray-300">
        2024 | Greetings with ❤️️ from Ulaanbaatar
      </p>
    </div>
  );
};
export default Footer;
