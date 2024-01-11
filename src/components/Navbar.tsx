import { IoLogoGitlab } from "react-icons/io5";

const Navbar = () => {
  const navItem: { name: string }[] = [
    {
      name: "Home",
    },
    {
      name: "works",
    },
    {
      name: "studio",
    },
    {
      name: "contact",
    },
  ];
  return (
    <div className="px-12 py-4 ">
      <div className="flex items-center max-sm:justify-center gap-12">
        <div className="text-4xl text-white cursor-pointer">
          <IoLogoGitlab />
        </div>
        <div className="flex text-white max-sm:hidden gap-8 ">
          {navItem.map((item, index) => (
            <span key={index} className="cursor-pointer">
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
