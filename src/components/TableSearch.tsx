"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";

const TableSearch = ({searchText = ''}:{searchText: string | undefined}) => {

    const router = useRouter();
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const value = (e.target as HTMLFormElement).search.value;
        const params = new URLSearchParams(window.location.search);
        value === "undefined" || value === ''? params.delete('search') : params.set('search', value.toString());
        params.set('page', "1");
        params.sort();
        return router.push(`${window.location.pathname}?${params.toString()}`);
    }
  return (
    <form onSubmit={onSubmit} className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
      <Image src="/search.png" alt="" width={14} height={14} />
      <input
        type="text"
        name="search"
        defaultValue={searchText? searchText : ""}
        placeholder="Search..."
        className="w-[200px] p-2 bg-transparent outline-none"
      />
    </form>
  );
};

export default TableSearch;
