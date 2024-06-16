import antLogo from "../../../public/img/skillsImg/antLogo.png";
import cssLogo from "../../../public/img/skillsImg/cssLogo.png";
import GitLogo from "../../../public/img/skillsImg/git logo.png";
import githubLogo from "../../../public/img/skillsImg/githubpng.png";
import htmlLogo from "../../../public/img/skillsImg/htmlLogo.png";
import jsLogo from "../../../public/img/skillsImg/javascriptLogo.png";
import muiLogo from "../../../public/img/skillsImg/muiLogo.png";
import nextIcon from "../../../public/img/skillsImg/nextjs.jpeg";
import tailwindLogo from "../../../public/img/skillsImg/tailwindLogo.png";
import tsLogo from "../../../public/img/skillsImg/tsLogo.png";
import FrameWork from "../works/components/FrameWork";
import SkillsItem from "./components/SkillsItem";
const Skills = () => {
  return (
    <>
      <div className="snap-center h-full w-full px-12">
        {/* <div className="relative px-56  md:px-64   top-8 mb-4">
        <div className=" rounded-md  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="flex rounded-md items-center justify-center bg-gradient-to-r from-gray-950  to-indigo-900 back">
            <h1 className="text-2xl font-black text-white">Skills</h1>
          </div>
        </div>
      </div> */}

        <div
          id="Skills"
          className=" flex flex-col md:grid md:grid-cols-2 pt-8 md:py-28 "
        >
          {/* left side */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-3">
              <SkillsItem logoAddress={jsLogo} />
              <SkillsItem logoAddress={tsLogo} />
              <SkillsItem logoAddress={htmlLogo} />
              <SkillsItem logoAddress={cssLogo} />
            </div>
            <div className="flex justify-center gap-3">
              <SkillsItem logoAddress={GitLogo} />
              <SkillsItem logoAddress={githubLogo} />
              <SkillsItem logoAddress={muiLogo} />
            </div>
            <div className="flex justify-center gap-3">
              <SkillsItem logoAddress={tailwindLogo} />
              <SkillsItem logoAddress={antLogo} />
            </div>
            <div className="flex justify-center">
              <SkillsItem logoAddress={nextIcon} />
            </div>
          </div>
          <div className="h-80 md:h-full md:col-span-1 md:pr-11">
            <FrameWork />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
