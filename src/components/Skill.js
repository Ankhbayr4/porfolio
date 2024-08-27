import { Express } from "./icon/Express";
import Javascript from "./icon/Javascript";
import { Mongodb } from "./icon/Mongodb";
import { Nest } from "./icon/Nest";
import { Node } from "./icon/Node";
import { Postgre } from "./icon/Postgre";
import { React } from "./icon/React";
import { Sass } from "./icon/Sass";
import { Taaa } from "./icon/Taaa";
import { Sockiet } from "./icon/Tech";
import { TypeScript } from "./icon/Typescript";

const skills = [
  {
    id: 1,
    name: "javascript",
    icon: <Javascript />,
  },
  {
    id: 2,
    name: "Typescript",
    icon: <TypeScript />,
  },
  {
    id: 3,
    name: "React",
    icon: <React />,
  },
  {
    id: 5,
    name: "Node",
    icon: <Node />,
  },
  {
    id: 5,
    name: "Express",
    icon: <Express />,
  },
  {
    id: 6,
    name: "Nest",
    icon: <Nest />,
  },
  { id: 7, name: " Sockiet", icon: <Sockiet /> },
];
const Skill = (props) => {
  const { icon, name } = props;
  return (
    <div class=" md:py-24 md:px-20 px-4 py-16 grid border-solid border border-gray-950 bg-#FFFFFF">
      <div class="flex flex-col gap-4 justify-center items-center ">
        <button class="bg-gray-200 rounded-xl py-1 px-5  text-gray-600 ">
          Skills
        </button>
        <p className="text-gray-600 text-lg">
          The skills, tools and technologies I am really good at:
        </p>
      </div>

      <div
        className=" flex 
       flex-wrap justify-between  self-stretch items-center gap-10 mt-6 ">
        <Javascript />
        <TypeScript />
        <React />
        <Node />

        <Express />
        <Nest />
        <Sockiet />
        <Postgre />
        <Mongodb />
        <Sass />
        <Taaa />

        {skills.map((skill) => {
          return <skill key={skill.id} name={skill.name} icon={skill.icon} />;
        })}
      </div>
    </div>
  );
};
export default Skill;
