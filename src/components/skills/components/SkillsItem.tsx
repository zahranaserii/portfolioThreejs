import { FC } from "react";

interface ISkillsItem {
  logoAddress: string;
}

const SkillsItem: FC<ISkillsItem> = ({ logoAddress }) => {
  return (
    <div className="bg-white/15 w-fit rounded-full px-3 py-3 hover:bg-white/20">
      <img
        className="rounded-full w-10 h-10 md:w-16 lg:w-20 md:h-16 lg:h-20 "
        src={logoAddress}
        alt="jsLogo"
      />
    </div>
  );
};

export default SkillsItem;
