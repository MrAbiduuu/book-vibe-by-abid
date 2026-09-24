"use client";
import { BooksContext } from "@/Context/BooksContext";
import { Ibook } from "@/types/booksType";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: Ibook }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);
  const handleReadBook = () => {
    setReadBooks([...readBooks, book]);
    toast.success(`You have read "${book.bookName}"`);
  };
  return (
    <button className="btn btn-primary px-7" onClick={() => handleReadBook()}>
      📖 Start Reading
    </button>
  );
};

export default ReadButton;
