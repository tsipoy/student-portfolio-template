import React from 'react'
import Header from './Header';
import Responsive from "./Responsive";
import Progress from "./Progress"
import OrganiseCss from './OrganiseCss';

export default function App() {
    return (
        <div>
            <Header />
            <Responsive />
            <Progress />
            <OrganiseCss />
        </div>
    )
}
