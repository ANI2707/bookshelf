import React,{useContext} from 'react';
import { BookContext } from '../utils/booksContext';
import Card from './Card';

const MyBooks = () => {
  const {bookshelf}=useContext(BookContext);

  if(bookshelf.length===0) return (
    <>
      <h1 className='text-black dark:text-white flex justify-center items-center my-64 text-2xl font-bold'>Please add some books...😒</h1>
    </>
  )
  return (
    <div className='mx-10 my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 am:gap-2'>
      {
        bookshelf.map((book,index)=>(
          <Card key={index} book={book} type="remove"/>
        ))
      }
    </div>
  )
}

export default MyBooks