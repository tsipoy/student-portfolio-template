import React from "react";
import myPhoto from "./assets/myPhoto.jpg";

export default function Header() {
  return (
    <header>
      <figure>
        <img src={myPhoto} alt="natacha" />
      </figure>
      <div>
        <div className="contactWrapper">
            <div>
                <h1>Natacha</h1>
                <p className="career">Front-end developer</p>
            </div>
            <div className="contact">
                <a href="mailto:volanana5@gmail.com">
                <i className="ri-mail-fill"></i> Email me
                </a>
                <p>
                <i className="ri-phone-fill"></i> (+261) 34 46 658 14
                </p>
            </div>
        </div>
        <p className="personalDetail">
            Self-motivated developer, who is willing to learn and create outstanding
            UI applications.
        </p>
      </div>
    </header>
  );
}
