import React from 'react'

export default function Progress() {
    return (
        <div className="progress">
            <h3>FRONT END</h3> 
            <div>
                <div className="progressWrapper">
                    <label>React</label>
                    <progress  max="100" value="30">30%</progress>
                </div>
                <div className="progressWrapper">
                    <label>Javascript</label>
                    <progress  max="100" value="50">50%</progress>
                </div>
                <div className="progressWrapper">
                    <label>Html</label>
                    <progress  max="100" value="90">90%</progress>
                </div>
                <div className="progressWrapper">
                    <label>css</label>
                    <progress  max="100" value="90">90%</progress>
                </div>
                <div className="progressWrapper">
                    <label>sass</label>
                    <progress  max="100" value="40">40%</progress>
                </div>
            </div>    
        </div>
    )
}
