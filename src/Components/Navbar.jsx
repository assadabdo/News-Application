import { useState } from "react";
import React from "react";
import { Results } from "./Results";
import { Link } from "react-router-dom";
export const category = [
  "general",
  "business",
  "technology",
  "science",
  "health",
  "sports",
  "entertainment",
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closMenu = () => setMenuOpen(false);
  const [Index, setIndex] = useState(0);
  const [selected, setSelected] = useState("general");
  return (
    <div>
      <div className="p-5 header pb-0 f ">
        <Link to="/">
          <p className="logo">
            NEW<span style={{ color: "white", fontSize: "22px" }}>EST</span>
          </p>
        </Link>
        <div className="i-cont" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>

        <ul className={menuOpen ? "displayed" : "non-displayed"}>
          {category.map((item, index) => (
            <li
              className={Index === index ? "active" : ""}
              onClick={() => {
                setSelected(item);
                setIndex(index);
                closMenu();
              }}
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        {" "}
        <Results selected={selected} closMenu={closMenu}></Results>
      </div>
    </div>
  );
};
