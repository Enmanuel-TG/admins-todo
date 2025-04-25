import { CiBellOn, CiChat1, CiMenuBurger, CiSearch } from "react-icons/ci";
export const Header = () => {
  return (
    <div className="flex justify-between p-2 bg-gray-400">
      <div className="text-4xl text-gray-600 font-medium">Dashboard</div>
      <div className="flex gap-2.5">
        <div className="text-gray-400 focus-within:text-cyan-400 ">
          <input
            type="search"
            name="leadingIcon"
            id="leadingIcon"
            placeholder="Search here"
            className="w-full pl-8 pr-1 py-2.5 rounded-xl text-sm text-white outline-none border border-gray-700 focus:border-cyan-300 transition"
          />
        </div>
        <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
          <CiChat1 size={25} />
        </button>
        <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
          <CiBellOn size={25} />
        </button>
      </div>
    </div>
  );
};
