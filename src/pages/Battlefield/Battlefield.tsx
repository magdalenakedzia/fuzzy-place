import { useState, useEffect } from "react";
import "./styles.less";

function Battlefield() {

    useEffect(() => {
        document.body.classList.add('battlefield')
        return () => {
            document.body.classList.remove('battlefield')
        }
    }, [])

    return (
        <div className="battlefield-page">
            <div className="card gray">
                <h1>Wind</h1>
            </div>
            <div className="card yellow">
                <h1>Fire</h1>
            </div>
            <div className="card blue">
                <h1>Water</h1>
            </div>
            <div className="card green">
                <h1>Earth</h1>
            </div>
        </div>
    );
}

export default Battlefield;
