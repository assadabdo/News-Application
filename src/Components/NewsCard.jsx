import React, { useState } from "react";

export const NewsCard = ({ results }) => {
  return (
    <div className="cont">
      {results?.articles?.map(
        ({
          urlToImage,
          title,
          description,
          url,
          publishedAt,
          content,
          source: { id, name },
          // console.log(id);
        }) => (
          <a key={url} href={url} target="_blank" style={{ margin: "10px" }}>
            <div onClick={() => closeMenu()} className="card-cont">
              <img
                style={{ height: "300px", maxWidth: "100%" }}
                src={urlToImage || null}
              />
              <div className="heading">
                <span> {name}</span>
                <span> {publishedAt?.substring(0, 10) ?? ""} </span>
              </div>
              <p style={{ maxWidth: "100%", margin: "10px", fontSize: "22px" }}>
                {title}
              </p>
              <div
                style={{
                  maxWidth: "100%",
                  color: "rgba(255, 255, 255, 0.644)",
                  margin: "0px 10px",
                }}
              >
                {description ? description.substring(0, 200) : ""}
              </div>
            </div>
          </a>
        ),
      )}
    </div>
  );
};
