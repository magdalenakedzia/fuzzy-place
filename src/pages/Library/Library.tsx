import { useState } from "react";
import { SpellBook } from "./SpellBook";
import { PotionsBook } from "./PotionsBook";
import { SpellAdvanced } from "./SpellAdvanced";
import { FlyBook } from "./FlyBook";
import "./styles.less";

function Library() {
    const [activeClass, setActiveClass] = useState("");
    console.log("aa", activeClass)
    return (
        <div className="library-page bg-dark">
            <div id='shelf'>
                <div className={`book-bg spells ${activeClass === "spells" && "active"}`}>
                    <div className='book flex-column'>
                        <div className="book book-shading" onClick={() => setActiveClass("spells")}> <h1>The Spell Book</h1></div>

                        <h5 >For NEW WITCHES</h5>
                        <SpellBook setActiveClass={() => setActiveClass("")} />
                    </div>
                </div>
                <div className={`book-bg potions ${activeClass === "potions" && "active"}`}>
                    <div className='book flex-column'>
                        <div className="book book-shading" onClick={() => setActiveClass("potions")}><h1>Witch's Alchemy Grimoire</h1></div>

                        <PotionsBook setActiveClass={() => setActiveClass("")} />
                    </div>
                </div>
                <div className={`book-bg spells-advanced ${activeClass === "spells-advanced" && "active"}`}>
                    <div className='book' >
                        <div className="book book-shading" onClick={() => setActiveClass("spells-advanced")}><h3>The Spell Book</h3>
                            <h4>for Advanced</h4></div>

                        <SpellAdvanced setActiveClass={() => setActiveClass("")} />
                    </div>
                </div>
                <div className={`book-bg fly ${activeClass === "fly" && "active"}`}>
                    <div className='book' >
                        <div className="book book-shading" onClick={() => setActiveClass("fly")}>  <h1>FLY, BROOM, FLY!</h1></div>

                        <FlyBook setActiveClass={() => setActiveClass("")} />
                    </div>
                </div>
            </div>
        </div >

    );
}

export default Library;
