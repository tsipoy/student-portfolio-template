import React, { useContext } from "react";

import { Context } from "./Context";

export default function Responsive() {
  const { data } = useContext(Context);

  const getData = data.map((website) => (
      <div key={website.id} className="responsive">
        <figure>
          <img src={website.screenshot} alt="responsive" />
        </figure>
        <div className="aboutInterior">
          <div>
            <p>{website.type}</p>
            <h2>{website.title}</h2>
            <p className="aboutSites">
              {website.description}
            </p>
          </div>
          <div>
            <button>
              <a href={website.demoUrl}>Demo</a>
            </button>
            <button>
              <a href={website.codeUrl}>Code</a>
            </button>
          </div>
        </div>
      </div>
    
  ));
  return (
    <div>
      {getData}
    </div>
  );
}
