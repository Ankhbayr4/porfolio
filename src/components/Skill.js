import Javascript from "./icon/Javascript";
import { Node } from "./icon/Node";
import { React } from "./icon/React";
import { TypeScript } from "./icon/Typescript";
import { Vercel } from "./icon/Vercel";

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
    <div>
      <div class="flex  justify-center items-center">
        <button class="bg-gray-400 rounded-xl w-24 h-7  ">About me</button>
      </div>
      <p>The skills, tools and technologies I am really good at:</p>

      <div>
        <Javascript />
        <TypeScript />
        <React />
        <Node />
        <Vercel />

        {skills.map((skill) => {
          return <skill key={skill.id} name={skill.name} icon={skill.icon} />;
        })}
      </div>
    </div>
  );
};
export default Skill;
