import "./book.less";

import { Coin } from "../Coin";
export type TBook = {
    setActiveClass: () => void,
    type: string,
    list: { records: any[], page_number: number, total_record_count: number }
}


function Book({ setActiveClass, type, list }: TBook) {
    const Card = ({ card }: any) => {
        return (
            <div className={`card ${card.avaible ? "" : "disabled"}`}>
                <span className="name">{card.name}</span>
                <img src={card.image} />
                <p>{card.decription}</p>
                {card.avaible ? (<button className="buy">BUY {card.price} <Coin /> </button>
                ) : (
                    <span className="info"> NOT AVAILABLE</span>
                )}
            </div>
        )
    }
    const isNextPageEnabled = list.total_record_count == list.page_number ? "disable" : "enable";
    const isPreviousPageEnabled = list.page_number == 2 ? "disable" : "enable";
    return (
        <div className={`contents book-component ${type}`}>
            <div id='back' onClick={() => setActiveClass()}>
                <svg width="45" height="60" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <g stroke="rgb(160, 160, 160)" stroke-width="4">
                        <line x1="10" y1="10" x2="30" y2="30" />
                        <line x1="10" y1="30" x2="30" y2="10" />
                    </g>
                </svg>
            </div>
            <div className="pages">
                {list.records.map((card, i) => (
                    <div className={`page ${i == 0 ? "first-page" : "second-page"}`}>
                        <Card card={card} />
                        {i === 0 ?
                            (
                                <span className={`page-number previous ${isPreviousPageEnabled}`}>{list.page_number - 1}</span>
                            ) : (
                                <span className={`page-number next ${isNextPageEnabled}`}>{list.page_number}</span>
                            )}
                    </div>
                ))}
            </div>

        </div>

    );
}

export default Book;