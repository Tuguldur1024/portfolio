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

let upperIcons = [
  { name: "Javascript", value: <Javascript /> },
  { name: "Typescript", value: <Typescript /> },
  { name: "React", value: <React /> },
  { name: "Node.js", value: <Node /> },
  { name: "Express.js", value: <Express /> },
  { name: "Javascript", value: <Javascript /> },
  { name: "Nest.js", value: <Nest /> },
  { name: "Socket.io", value: <Socket /> },
];
let bottomIcons = [
  { name: "MongoDb", value: <MongoDb /> },
  { name: "Sass/Scss", value: <Sass /> },
  { name: "Tailwindcss", value: <StoryBook /> },
  { name: "Figma", value: <FigmaColored /> },
  { name: "Cypress", value: <Cypress /> },
  { name: "StoryBook", value: <StoryBook /> },
  { name: "Git", value: <Git /> },
  { name: "MongoDb", value: <MongoDb /> },
];
const Skills = () => {
  return (
    <div class="flex flex-col items-center gap-4">
      <ButtonAbout text="Skills" />
      <p class="font-normal text-gray-600 text-xl mb-8">
        The skills, tools and technologies I am really good at:
      </p>
      <div class="w-full flex flex-col gap-12">
        <div class="w-full flex justify-between">
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
        <div class="w-full flex justify-between">
          {bottomIcons.map((bottomIcon, index) => {
            return (
              <Framework
                key={index}
                icon={bottomIcon.value}
                text={bottomIcon.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
