import ButtonAbout from "./ButtonAbout";

const Experience = () => {
  return (
    <div class="flex flex-col gap-4 items-center">
      <ButtonAbout text="Experience" />
      <p class="font-normal text-gray-600 text-xl mb-8">
        Here is a quick summary of my most recent experiences:
      </p>
      <div class="flex flex-col gap-12 "></div>
    </div>
  );
};
export default Experience;
