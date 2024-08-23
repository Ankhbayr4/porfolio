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
  // {
  //   id: 4,
  //   name: "Next",
  //   icon: <Next />,
  // },
];
const Skill = (props) => {
  const { icon, name } = props;
  return (
    <div class="px-4 py-16 grid gap-x-6 bg-gray-200">
      <div class="flex  justify-center items-center">
        <button class="bg-gray-400 rounded-xl w-24 h-7  ">About me</button>
      </div>
      <p className="text-gray-600 text-lg">
        The skills, tools and technologies I am really good at:
      </p>

      <div className=" flex flex-wrap gap-9">
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
