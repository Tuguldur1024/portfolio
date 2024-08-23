import LocationIcon from "./icons/locationIcon";
import TwitterIcon from "./icons/TwitterIcon";
import FigmaIcon from "./icons/FigmaIcon";
import CatIcon from "./icons/CatIcon";
import Image from "next/image";
const Introduction = () => {
  return (
    <div class="md:my-24 md:px-8 flex lg:flex-col-reverse gap-12 flex-row my-16 px-0">
      <div class=" flex flex-col gap-12 w-full">
        <div>
          <h1 class="text-5xl font-bold sm:font-semibold sm:text-4xl	dark:text-gray-50		">
            Hi, Im him 👋
          </h1>
          <p class="mt-2 text-gray-600  font-normal  dark:text-gray-300">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </p>
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex gap-2  align-center  dark:text-gray-300">
            <LocationIcon />
            <p> Ulaanbaatar, Mongolia </p>
          </div>
          <div class="flex gap-2 align-center  dark:text-gray-300">
            <div class="h-6 w-6 flex items-center justify-center">
              <div class="h-2 w-2 rounded-3xl bg-emerald-500"></div>
            </div>
            <p> Available for new projects</p>
          </div>
        </div>
        <div class="flex gap-1">
          <CatIcon />
          <TwitterIcon />
          <FigmaIcon />
        </div>
      </div>

      <div class=" flex justify-center sm:w-full">
        <Image
          // fill
          src="/images/Intro.png"
          width={320}
          height={360}
          alt="Intro Picture"
        />
      </div>
    </div>
  );
};

export default Introduction;
