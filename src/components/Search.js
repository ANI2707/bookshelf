import React, { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BookContext } from "../utils/booksContext";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const { fetchBooks } = useContext(BookContext);

  const handleSearch = () => {
    fetchBooks(searchInput);
    setSearchInput("");
  };
  return (
    <div className="flex items-center justify-center  w-full mt-16">
      <div className="w-[70vw] sm:w-[40vw]   h-[38px] flex items-center justify-start border-2 border-[#25709b] bg-[#00040f] hover:border-[#46C5FF] rounded-lg px-2 gap-2 m-3">
        <CiSearch className="text-[#25709b]" />

        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search books here..."
          className="w-full h-full bg-[#00040f]   text-opacity-200 outline-none text-white "
        />
      </div>
      <button
        onClick={handleSearch}
        className="inline-flex items-center py-2 px-2   text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
