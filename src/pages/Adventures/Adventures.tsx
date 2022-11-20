import { useState, useEffect } from "react";
import "./styles.less";

function Adventures() {

    useEffect(() => {
        document.body.classList.add('adventures')
        return () => {
            document.body.classList.remove('adventures')
        }
    }, [])

    return (
        <div className="adventures-page">
            <div className="container">
                <div className="drop"
                >
                    <div className="content">
                        <h2>01</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, vel.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="drop"
                >
                    <div className="content">
                        <h2>02</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, vel.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="drop"
                >
                    <div className="content">
                        <h2>01</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, vel.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="drop"
                >
                    <div className="content">
                        <h2>02</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, vel.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Adventures;
