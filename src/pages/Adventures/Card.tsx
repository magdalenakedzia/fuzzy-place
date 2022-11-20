type TCard = {
    quest: { descriotion: string, avaible: boolean },
    index: number
}
function Card({ quest, index }: TCard) {
    return (
        <div className="drop"
        >
            <div className="content">
                <h2>0{index}</h2>
                <p>{quest.descriotion}</p>
                {quest.avaible ? <a >Let's go!</a> : <span>NOT AVAIBLE</span>}
            </div>
        </div>
    );
}

export default Card;