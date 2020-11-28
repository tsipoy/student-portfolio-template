import React from 'react';
import responsive from "./assets/interior-desktop.png";

export default function Responsive() {
    return (
        <div className="responsive">
            <figure>
                <img src={responsive} alt="responsive" />
            </figure>
            <div className="aboutInterior">
                <div>
                    <p>#html #css #sass #responsive</p>
                    <h2>Interior Consultant</h2>
                    <p className="aboutSites">In this project, I work with HTML and CSS to create a responsive page and I add SASS for the fonts to work. The design is from devchallenge.io.</p>
                </div>
                <div>
                    <button>Demo</button>
                    <button>Code</button>
                </div>
            </div>
        </div>
    )
}
