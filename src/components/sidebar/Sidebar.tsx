import { CiLogout, CiBookmarkCheck } from "react-icons/ci";
import Image from "next/image";
import { SidebarItem } from "./SidebarItem";
import { IoCalendarOutline, IoCheckboxOutline, IoListOutline } from "react-icons/io5";

const pages = [
  {
    icon: <IoCalendarOutline />,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <IoCheckboxOutline />,
    title: "Rest TODOS",
    path: "/dashboard/rest-todos",
  },
  {
    icon: <IoListOutline />,
    title: "Server Actions",
    path: "/dashboard/server-todos",
  },
];

export const Sidebar = () => {
  return (
    <aside className="pb-3 px-6 w-full flex flex-col h-screen bg-gray-300 fixed duration-300 justify-between md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="my-8 text-center">
          <Image
            src="/Profile.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            Enmanuel Taveras
          </h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>
        {pages.map((item) => (
          <SidebarItem key={item.path} item={item} />
        ))}
      </div>
      <div className="px-6 -mx-6 pt-4 flex justify-between items-center">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
          <CiLogout />
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
      </div>
    </aside>
  );
};
