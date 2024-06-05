import { createContext, useEffect, useState } from "react";

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [bookshelf, setBookshelf] = useState(() => {
    const savedBookShelf = localStorage.getItem("bookshelf");
    return savedBookShelf ? JSON.parse(savedBookShelf) : [];
  });

  const fetchBooks = async (query = "bestseller") => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
      );
      const data = await response.json();
      setBooks(data?.docs);
      
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch books:", err);
    }
  };

  const addToBookshelf = (book) => {
    setBookshelf((prevBookshelf) => {
      const newBookShelf = [...prevBookshelf, book];
      localStorage.setItem("bookshelf", JSON.stringify(newBookShelf));
      return newBookShelf;
    });
  };

  const removeFromBookshelf = (bookKey) => {
    setBookshelf((prevBookshelf) => {
      const newBookShelf = prevBookshelf.filter((book) => book.key !== bookKey);
      localStorage.setItem("bookshelf", JSON.stringify(newBookShelf));
      return newBookShelf;
    });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <BookContext.Provider
      value={{
        books,
        fetchBooks,
        bookshelf,
        addToBookshelf,
        removeFromBookshelf,
        loading,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };
