"use client";
import { BooksContext } from "@/Context/BooksContext";
import { Ibook } from "@/types/booksType";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishlistButton = ({ book }: { book: Ibook }) => {
  const { wishlist, setWishlist } = useContext(BooksContext);
  const handleAddToWIshlist = () => {
    setWishlist([...wishlist, book]);
    toast.success(`You have added "${book.bookName}" to your wishlist`);
  };
  return (
    <button
      className="btn btn-primary px-7"
      onClick={() => handleAddToWIshlist()}
    >
      Add to Wishlist
    </button>
  );
};

export default WishlistButton;
