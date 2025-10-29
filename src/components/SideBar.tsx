import type { ReactElement } from "react";
import { NavLink } from "react-router";

const SideBar = ({
  text,
  icon,
  path,
}: {
  text: string;
  icon: ReactElement;
  path: string;
}) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        [isActive ? "bg-[#004A77] rounded-4xl" : "bg-transparent"].join(" ")
      }
    >
      <li className="flex gap-2 items-center cursor-pointer hover:bg-inner transition-all duration-100 px-4 py-1 rounded-4xl">
        {icon} {text}
      </li>
    </NavLink>
  );
};

export default SideBar;
