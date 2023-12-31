import React, { useRef } from "react";
import { useAppDispatch } from "../hooks/hook";
import { setSearch } from "../redux/features/service/serviceSlice";

export default function SearchBar() {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //console.log("handleSubmit ran");
    event.preventDefault();

    if (searchRef.current) {
      //   handleSearchData(searchRef.current.value);
      // console.log(searchRef.current.value);
      console.log(searchRef.current.value);
      dispatch(setSearch(searchRef.current.value));
    }
    // if (event.currentTarget instanceof HTMLFormElement) {
    //   event.currentTarget.reset(); // Clear the form
    // }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="    xl:col-span-7 extraSm:col-span-6 "
    >
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-custom-red focus:border-custom-red
           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom-red dark:focus:border-custom-red "
          placeholder="Search Service Name"
          ref={searchRef}
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-custom-red hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        >
          Search
        </button>
      </div>
    </form>
  );
}
