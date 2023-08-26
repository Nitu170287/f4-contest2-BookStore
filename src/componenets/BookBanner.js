import React, { useState } from "react";

const BookBanner = (props) => {
  const [previewIndex, setPreviewIndex] = useState(-1);

  if (previewIndex === -1) {
    return (
      <div className="bookwrapper-parent ">
        {props.previewlist && props.previewlist.length > 0
          ? props.previewlist.map((preview, index) => {
              return (
                <div className="bookwrapper ">
                  <div className="bookImg">
                    <img
                      src={preview.volumeInfo.imageLinks.smallThumbnail}
                      alt=""
                    ></img>
                  </div>

                  <div className="book-info">
                    <h3>{preview.volumeInfo.title.substring(0, 50) + "..."}</h3>
                    <p>
                      {preview && preview.volumeInfo.description
                        ? "Description :" +
                          preview.volumeInfo.description.substring(0, 100) +
                          "..."
                        : null}
                    </p>
                    <button onClick={() => setPreviewIndex(index)}>
                      Read More
                    </button>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    );
  } else {
    return (
      <div className="bookwrapper-streatch">
        <div className="bookImg-streatch ">
          <img
            src={
              props.previewlist[previewIndex].volumeInfo.imageLinks
                .smallThumbnail
            }
            alt=""
          ></img>
        </div>

        <div className="book-info-streach">
          <div className="heading">
            <h2>{props.previewlist[previewIndex].volumeInfo.title}</h2>
            <p>
              Published On :{" "}
              {props.previewlist[previewIndex].volumeInfo.publishedDate}
            </p>
          </div>
          <div className="book-auth-desc">
            <p className="author-name">
              {props.previewlist[previewIndex].volumeInfo.authors.join(", ")}
            </p>
            <p className="description">
              {props.previewlist[previewIndex].volumeInfo.description
                ? "Description :" +
                  props.previewlist[
                    previewIndex
                  ].volumeInfo.description.substring(0, 300) +
                  "..."
                : null}
            </p>
            <div className="book-rating-lang-pub">
              <p>
                Avg Rating :{" "}
                {props.previewlist[previewIndex].volumeInfo.averageRating}
              </p>
              <p>
                Rating Count :{" "}
                {props.previewlist[previewIndex].volumeInfo.ratingsCount}{" "}
              </p>
              <p>
                Publisher :{" "}
                {props.previewlist[previewIndex].volumeInfo.publisher}{" "}
              </p>
              <p>
                Language : {props.previewlist[previewIndex].volumeInfo.language}{" "}
              </p>
            </div>
          </div>

          <div className="btn-link">
            <a
              href={props.previewlist[previewIndex].volumeInfo.previewLink}
              target="_blank"
              rel="noreferrer"
            >
              Read Now
            </a>
            <a
              href={props.previewlist[previewIndex].volumeInfo.infoLink}
              target="_blank"
              rel="noreferrer"
            >
              More Info!
            </a>
          </div>
        </div>
      </div>
    );
  }
};
export default BookBanner;
