import { Outlet } from "react-router";
import { LuPlus } from "react-icons/lu";
// import { ImFolderUpload } from "react-icons/im";
// import { MdOutlineUploadFile } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { TiStarFullOutline } from "react-icons/ti";
import { PiTrashFill } from "react-icons/pi";
import SideBar from "./components/SideBar";
const Layout = () => {
  return (
    <div className="w-full min-h-screen flex font-drive text-text pb-4 bg-background">
      <div className="w-1/5  text-white flex flex-col gap-2 p-5">
        <div className="flex gap-3  w-full justify-start items-center">
          <img src="/img/logo.png" alt="logo" className="w-10" />
          <h1 className="text-3xl cursor-default">Drive</h1>
        </div>
        <div className="w-full relative my-4">
          <button className="flex items-center gap-3  p-4 bg-inner rounded-xl cursor-pointer">
            <span>
              <LuPlus size={25} />
            </span>
            <span>New</span>
          </button>
          {/* <div className="absolute top-0 left-0  p-3 w-full bg-background shadow-custom flex flex-col rounded gap-3">
            <span className="flex gap-3 items-center ">
              <ImFolderUpload />
              <span>Upload Folder</span>
            </span>
            <span className="flex gap-3 items-center ">
              <MdOutlineUploadFile />
              <span>Upload File</span>
            </span>
          </div> */}
        </div>
        <ul className="flex flex-col gap-4 w-full ">
          <SideBar icon={<GoHomeFill />} text="Home" path="home" />
          <SideBar icon={<TiStarFullOutline />} text="Stared" path="star" />
          <SideBar icon={<PiTrashFill />} text="Trash" path="trash" />
        </ul>
      </div>
      <div className="flex-1  flex flex-col pl-2 pr-12">
        <div className="w-full h-16 "></div>
        <div className="rounded-3xl w-full flex-1 bg-backoutlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
