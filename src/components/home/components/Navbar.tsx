const Navbar = () => {
  //constanst
  const navItem: { name: string }[] = [
    {
      name: "Skills",
    },
    {
      name: "Projects",
    },
    {
      name: "Contact",
    },
    {
      name: "Connection",
    },
    {
      name: "",
    },
  ];

  //function

  return (
    <div className="flex  items-center max-sm:justify-center gap-12">
      <div className="text-4xl text-white "></div>
      <div className="flex text-white max-sm:hidden gap-8 ">
        {navItem.map((item, index) => (
          <a
            href={`#${item.name}`}
            key={index}
            className="cursor-pointer"
            onClick={() => {}}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
