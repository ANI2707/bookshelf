import { useContext } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { BookContext } from "../utils/booksContext";

const CardContainer = () => {
  const { books, loading } = useContext(BookContext);

  if(loading) return (<Shimmer />)
  return(
    <div className="mx-10 my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 am:gap-2">
      {books.map((book, index) => (
        <Card key={index} book={book} type="add" />
      ))}
    </div>
  );
};

export default CardContainer;
