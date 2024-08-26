import ButtonAbout from "./ButtonAbout";
import EnvelopeIcon from "./icons/EnvelopeIcon";
import NewTabIcon from "./icons/NewTabIcon";
import PhoneIcon from "./icons/PhoneIcon";
import TwitterIcon from "./icons/TwitterIcon";
import FigmaIcon from "./icons/FigmaIcon";
import CatIcon from "./icons/CatIcon";
const GetInTouch = () => {
  return (
    <div class="flex flex-col gap-6 items-center px-0 md:gap-12 md:px-8">
      <div class="flex flex-col gap-4 items-center">
        <ButtonAbout text="Get in touch" />
        <p class="font-normal text-gray-600 text-xl mb-0 md:mb-8 text-center dark:text-gray-300	">
          Whats next? Feel free to reach out to me if youre looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div class="flex flex-col gap-4 items-center sm:gap-0">
        <div class="flex gap-4 items-center md:gap-5">
          <EnvelopeIcon className="md:w-8 md:h-8 dark:hidden" />
          <EnvelopeIcon
            className="md:w-8 md:h-8 hidden dark:block"
            color={"white"}
          />
          <p class="text-gray-900 font-semibold md:text-4xl text-lg dark:text-gray-50	">
            Tuguldur@pinecone.mn
          </p>
          <NewTabIcon className="md:w-8 md:h-8 dark:hidden" />
          <NewTabIcon
            className="md:w-8 md:h-8 hidden dark:block"
            color={"white"}
          />
        </div>
        <div class="flex gap-4 items-center md:gap-5">
          <PhoneIcon className="md:w-8 md:h-8 dark:hidden" />
          <PhoneIcon
            className="md:w-8 md:h-8 hidden dark:block"
            color={"white"}
          />
          <p class="text-gray-900 font-semibold md:text-4xl text-lg dark:text-gray-50	">
            {" "}
            +976 99119911{" "}
          </p>
          <NewTabIcon className="md:w-8 md:h-8 dark:hidden" />
          <NewTabIcon
            className="md:w-8 md:h-8 hidden dark:block"
            color={"white"}
          />
        </div>
      </div>
      <div class="flex flex-col gap-2 items-center dark:text-gray-300	">
        <p> You may also find me on these platforms! </p>
        <div class="flex gap-1 items-center">
          <CatIcon className="dark:hidden" />
          <CatIcon className="hidden dark:block" color={"white"} />
          <TwitterIcon className="dark:hidden" />
          <TwitterIcon className="hidden dark:block" color={"white"} />
          <FigmaIcon className="dark:hidden" />
          <FigmaIcon className="hidden dark:block" color={"white"} />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
