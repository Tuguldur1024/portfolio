import ButtonAbout from "./ButtonAbout";
import GoToLinkBtn from "./icons/GoToLinkBtn";
import Image from "next/image";

const JobInstance = (props) => {
  let content = (
    <div class="flex drop-shadow-md flex-col md:flex-row dark:bg-gray-800	">
      <div class="flex justify-center items-center p-8  border border-gray-100 sm:w-full md:p-12 dark:bg-gray-700 dark:border dark:border-gray-800	">
        <Image
          class="drop-shadow-lg"
          src={props.imageSource}
          height={384}
          width={480}
        />
      </div>
      <div class="flex flex-col gap-6  p-12 sm:w-full sm:p-8">
        <p class="font-semibold text-xl text-gray-900 dark:text-gray-50	">
          {props.name}
        </p>
        <p class="text-gray-600 font-normal text-base dark:text-gray-300	">
          {" "}
          {props.description}{" "}
        </p>
        <div class="flex flex-wrap gap-2">
          {props.frameworks.map((framework, index) => {
            return <ButtonAbout key={index} text={framework} />;
          })}
        </div>
        <GoToLinkBtn />
      </div>
    </div>
  );
  if (props.number % 2 == 1) {
    content = (
      <div class="flex flex-col-reverse drop-shadow-md md:flex-row dark:bg-gray-800">
        <div class="flex flex-col gap-6  p-12 sm:w-full sm:p-8">
          <p class="font-semibold text-xl text-gray-900 dark:text-gray-50	">
            {" "}
            {props.name}{" "}
          </p>
          <p class="text-gray-600 font-normal text-base dark:text-gray-300">
            {props.description}
          </p>
          <div class="flex flex-wrap gap-2">
            {props.frameworks.map((framework, index) => {
              return <ButtonAbout key={index} text={framework} />;
            })}
          </div>
          <GoToLinkBtn />
        </div>
        <div class="flex justify-center items-center p-8 border border-gray-100 sm:w-full md:p-12 dark:bg-gray-700 dark:border dark:border-gray-800	">
          <Image
            class="drop-shadow-lg"
            src={props.imageSource}
            height={384}
            width={480}
          />
        </div>
      </div>
    );
  }
  return content;
};

export default JobInstance;
