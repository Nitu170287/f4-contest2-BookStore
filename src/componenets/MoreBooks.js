import React from "react";

const MoreBooks = (props) => {
  return (
    <div className="Books">
      <h2>More Books</h2>
      <div className="gallery">
        {props.bookLists && props.bookLists.length>0
          ? props.bookLists.map((book) => {
              return <img src={book.volumeInfo.imageLinks.smallThumbnail} />;
            })
          : null}
      </div>
    </div>
  );
};
export default MoreBooks;
