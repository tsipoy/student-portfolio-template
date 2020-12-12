import React from 'react';
import playing from "./assets/basketball.jpg";
import singing from './assets/singing.jpg';
import walking from './assets/walking.jpg'

export default function Hobbies() {
    return (
        <div className="hobbies">
            <h2>Hobbies</h2>
            <nav>
                <ul>
                    <li>
                        <img src={playing} alt="Playing basketball" />
                    </li>
                    <li className="hobbies-title">Playing Basketball</li>
                    <li>I like moving my hand with running a bit when I am playing basketball.</li>
                </ul>
                <ul>
                    <li>
                        <img src={singing} alt="Singing" />
                    </li>
                    <li className="hobbies-title">Singing</li>
                    <li>I miss my family when I am singing. We are often singing load together.</li>
                </ul>
                <ul>
                    <li>
                        <img src={walking} alt="Walking" />
                    </li>
                    <li className="hobbies-title">Walking</li>
                    <li>Walking with friends is on of my favourite hobbies.</li>
                </ul>
            </nav>
        </div>
    )
}
