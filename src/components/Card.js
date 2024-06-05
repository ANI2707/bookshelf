import React, { useContext } from "react";
import { FaBookmark, FaTrash } from "react-icons/fa";
import { BookContext } from "../utils/booksContext";
import { IoStar } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ book, type }) => {
  const {
    title,
    author_name,
    publish_year,
    key,
    ratings_average,
    readinglog_count,
  } = book;
  const { addToBookshelf, removeFromBookshelf } = useContext(BookContext);

  return (
    <div className="max-w-sm min-h-[230px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-2">
        <div className="inline-flex items-center gap-1 px-2 dark:bg-gray-600 border border-gray-700 rounded-lg text-gray-900 dark:text-white">
          {ratings_average.toFixed(0)}{" "}
          <span>
            <IoStar />
          </span>
        </div>
        <div className="px-2  bg-green-400 dark:bg-green-500 border border-gray-700 rounded-lg text-gray-900 dark:text-white">
          {publish_year[0]}
        </div>
      </div>
      <a href={`https://openlibrary.org/${key}`} target="_blank ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">
          <span className=" ">Title : </span>
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
        <span className="font-bold text-gray-900 dark:text-white">
          Author :{" "}
        </span>
        {author_name}
      </p>
      <div className="flex justify-between items-center">
        {type === "add" ? (
          <button
            className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => {
              addToBookshelf(book);
              toast.success("Book added to bookshelf!");
            }}
          >
            <FaBookmark className="" />
          </button>
        ) : (
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            onClick={() => {
              removeFromBookshelf(book.key);
              toast.error("Book removed from bookshelf!");
            }}
          >
            Remove <FaTrash className="mx-2" />
          </button>
        )}
        <button className="text-gray-600 text-2xl inline-flex items-center gap-2">
          <FaEye />{readinglog_count}
        </button>
      </div>
    </div>
  );
};

export default Card;
