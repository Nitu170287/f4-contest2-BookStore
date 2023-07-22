import "../src/style.css";
import NavBar from "./componenets/NavBar";
import MoreBooks from "./componenets/MoreBooks";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BookBanner from "./componenets/BookBanner";

const App = () => {
  const [bookLists, setBookLists] = useState([]);
  const [previewlist, setPreviewList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=AIzaSyBQ5Mz54R1f0fXo5Di_gR4AFxRAXu1m4hY"
      )
      .then((request) => {
        updateLists(request.data.items);
        //setPreviewList(request.data.items.slice(0, 3));
        //console.log(previewlist);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes&key=AIzaSyBQ5Mz54R1f0fXo5Di_gR4AFxRAXu1m4hY"
      )
      .then((request) => {
        updateLists(request.data.items);
        //setPreviewList(request.data.items.slice(0, 3));
        //console.log(previewlist);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function updateLists(list) {
    setBookLists((prevItem) => prevItem.concat(list));
    setPreviewList(list.slice(0, 3));
  }

  return (
    <div>
      <NavBar setBookLists={setBookLists} setPreviewList={setPreviewList} />
      <BookBanner previewlist={previewlist} />
      <MoreBooks bookLists={bookLists} className="gallery" />
    </div>
  );
};

export default App;
