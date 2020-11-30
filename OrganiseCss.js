import React from 'react';
import cssFileImage from "./assets/css.png"

export default function OrganiseCss() {
    return (
        <div className="organiseCss">
            <div>
                <div>
                    <div className="organiseInner">
                        <h2>Blog</h2>
                        <h3>How to organise your css</h3>
                    </div>
                    <figure>
                        <img src={cssFileImage} alt="css file" />
                    </figure>
                </div>
            </div>
            <div>
                <p>In this article I tell you the story about organising my css</p>
                <button>dev.to</button>
            </div>
        </div>
    )
}
