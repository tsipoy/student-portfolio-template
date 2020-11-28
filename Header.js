import React from "react";
import myPhoto from "./assets/myPhoto.jpg";

export default function Header() {
  return (
    <header>
      <figure>
        <img src={myPhoto} alt="natacha" />
      </figure>
      <div>
        <h1>Natacha</h1>
        <p>Front-end developer</p>
      </div>
      <div>
        <a href="mailto:volanana5@gmail.com" >
          <i className="ri-mail-fill"></i> volanana5@gmail.com
        </a>
        <p>
          <i className="ri-phone-fill"></i> (+261) 34 46 658 14
        </p>
      </div>
      <p></p>
    </header>
  );
}
