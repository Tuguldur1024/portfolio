import ButtonAbout from "./ButtonAbout";
import Framework from "./FrameWork";
import Cypress from "./icons/CypressIcon";
import FigmaColored from "./icons/FigmaColorIcon";
import Git from "./icons/GitIcon";
import Javascript from "./icons/JavascriptIcon";
import Express from "./icons/ExpressIcon";
import MongoDb from "./icons/MongoDbIcon";
import Nest from "./icons/NestIcon";
import Next from "./icons/NextIcon";
import Node from "./icons/NodeIcon";
import PostgreSql from "./icons/PostgreSqlIcon";
import React from "./icons/ReactIcon";
import Sass from "./icons/SassIcon";
import Socket from "./icons/SocketIcon";
import StoryBook from "./icons/StoryBookIcon";
import Tailwind from "./icons/TailwindIcon";
import Typescript from "./icons/TypescriptIcon";
// if(document.documentElement.classList.contains("dark"))
// {
//   background1 = "black"
//   color1 = "white"
// }
let upperIcons = [
  { name: "Javascript", value: <Javascript /> },
  { name: "Typescript", value: <Typescript /> },
  { name: "React", value: <React /> },
  { name: "Node.js", value: <Node /> },
  {
    name: "Express.js",
    value: (
      <>
        <Express color={"white"} className="hidden dark:block" />
        <Express className="dark:hidden" />
      </>
    ),
  },
  { name: "Javascript", value: <Javascript /> },
  { name: "Nest.js", value: <Nest /> },
  {
    name: "Socket.io",
    value: (
      <>
        <Socket
          color={"white"}
          background={"black"}
          className="hidden dark:block"
        />
        <Socket className="dark:hidden" />
      </>
    ),
  },
  { name: "MongoDb", value: <MongoDb /> },
  { name: "Sass/Scss", value: <Sass /> },
  { name: "Tailwindcss", value: <StoryBook /> },
  { name: "Figma", value: <FigmaColored /> },
  {
    name: "Cypress",
    value: (
      <>
        <Cypress className="hidden dark:block" color="white" />
        <Cypress className="dark:hidden" />
      </>
    ),
  },
  { name: "StoryBook", value: <StoryBook /> },
  { name: "Git", value: <Git /> },
  { name: "MongoDb", value: <MongoDb /> },
];
const Skills = () => {
  return (
    <div class="flex flex-col items-center gap-4">
      <ButtonAbout text="Skills" />
      <p class="font-normal text-gray-600 text-xl mb-8 sm:mb-2 dark:text-gray-300	">
        The skills, tools and technologies I am really good at:
      </p>
      <div class="w-full grid gap-y-12 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 justify-between sm:gap-y-4">
        {upperIcons.map((upperIcon, index) => {
          return (
            <Framework
              key={index}
              icon={upperIcon.value}
              text={upperIcon.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
