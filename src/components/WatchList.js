import React from "react";
import "../styles.css";
import BookCard from "./BookCard";

export default function WatchList({ watchList, books, toggleWatchList }) {
  return (
    <div>
      <h1 className="title">Zoznam na Čítanie</h1>
      <div className="watchlist">
        {watchList.map((id) => {
          const book = books.find((book) => book.id === id);
          return (
            <BookCard
              key={id}
              book={book}
              toggleWatchList={toggleWatchList}
              isWatchlisted={true}
            />
          );
        })}
      </div>
    </div>
  );
}
