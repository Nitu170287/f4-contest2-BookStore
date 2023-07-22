import axios from "axios";
import React, { useState } from "react";
import logoImage from "../images/logo-image.svg";
import logoText from "../images/logo-text.svg";
import heartIcon from "../images/heart-icon.svg";
import bellIcon from "../images/bell-icon.svg";
import diamondIcon from "../images/diamond-icon.svg";
import imageIcon from "../images/image.svg";
import searchIcon from "../images/search-icon.svg";

const NavBar = (props) => {
  const [search, setSearch] = useState("");

  function displayBooks() {
    console.log(
      `https://www.googleapis.com/books/v1/volumes?q=${search.replaceAll(
        " ",
        "+"
      )}&key=AIzaSyBLKk4qpY1tMkGM7IXSuszRvqf5BnFJ6dY`
    );
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search.replaceAll(
          " ",
          "+"
        )}&key=AIzaSyBLKk4qpY1tMkGM7IXSuszRvqf5BnFJ6dY`
      )
      .then((request) => {
        props.setBookLists(request.data.items);
        props.setPreviewList(request.data.items.splice(0, 3));
        console.log(request.data.items);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          {/*  */}
          <img
            src={logoImage}
            style={{ width: "64px", height: "95px" }}
            alt=""
          />
          <img
            src={logoText}
            style={{ width: "160px", height: "45px" }}
            alt=""
          />
        </div>

        <div className="SearchBox">
          <img
            src={searchIcon}
            style={{ width: "25px", height: "25px" }}
            alt=""
          />
          <input
            type="text"
            placeholder=" Search for the book you want and read it now...Sherlock Holmes and Harry Pot.."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button onClick={displayBooks}>Search</button>
        </div>

        <ul className="icons">
          <li>
            <a href="/#">
              <img src={heartIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="/#">
              <img src={bellIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="/#">
              <img src={diamondIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="/#">
              <img src={imageIcon} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
