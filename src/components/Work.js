import ButtonAbout from "./ButtonAbout";
import JobInstance from "./JobInstance";

const data = [
  {
    name: "UBCab",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    frameworks: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    imageSource: "/images/Ubcab.png",
    index: 0,
  },
  {
    name: "Mentorhub",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    frameworks: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    imageSource: "/images/MentorHub.png",
    index: 1,
  },
  {
    name: "iToim",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    frameworks: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    imageSource: "/images/iToim.png",
    index: 2,
  },
];

const Work = () => {
  return (
    <div class="flex flex-col gap-6 items-center px-0 md:px-16 lg:px-16">
      <ButtonAbout text="Work" />
      <p class="font-normal text-gray-600 text-xl mb-2 text-center md:mb-8 lg:smb-8 dark:text-gray-300	 ">
        Some of the noteworthy projects I have built:
      </p>
      {data.map((OneWork, index) => {
        return (
          <JobInstance
            key={index}
            number={OneWork.index}
            imageSource={OneWork.imageSource}
            name={OneWork.name}
            description={OneWork.description}
            frameworks={OneWork.frameworks}
          />
        );
      })}
    </div>
  );
};

export default Work;
