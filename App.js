import React from 'react';

import Header from './Header';
import Responsive from "./Responsive";
import Progress from "./Progress"
import OrganiseCss from './OrganiseCss';
import Hobbies from './Hobbies'

export default function App() {
    return (
        <div>
            <Header />
            <div className="desktopLayout">
                <div>
                    <Progress />
                    <Hobbies />
                </div>
                <OrganiseCss />
            </div>
            <Responsive />
        </div>
    )
}
