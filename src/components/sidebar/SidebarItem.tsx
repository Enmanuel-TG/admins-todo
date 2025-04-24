import { CiBookmarkCheck } from "react-icons/ci";
import Link from "next/link";

interface Props {
    data: {
        name:string
    }
}

export const SidebarItem = ({ data }: Props) => {
  return (
    <div className="tracking-wide pb-3">
      <Link
        className="relative px-4 py-3 flex space-x-4 rounded-xl
            text-white bg-gradient-to-r from-sky-600 to-cyan-400"
        href="/dashboard"
      >
        <CiBookmarkCheck size={30} />
        <span className="-mr-1 font-medium">{data.name}</span>
      </Link>
    </div>
  );
};
