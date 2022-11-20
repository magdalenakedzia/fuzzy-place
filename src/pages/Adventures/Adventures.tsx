import { useEffect } from "react";
import Card from "./Card";
import "./styles.less";

function Adventures() {

    useEffect(() => {
        document.body.classList.add('adventures')
        return () => {
            document.body.classList.remove('adventures')
        }
    }, [])

    const easyQuests = [{
        descriotion: "Go on 8-hour adventures and earn 5 coins.",
        avaible: true
    }, {
        descriotion: "Go on 24-hour adventures and earn 15 coins.",
        avaible: true
    }]
    const adwancedQuests = [{
        descriotion: "Go on 8-hour adventures and earn 20 coins. Be careful, you might hurt yourself!",
        avaible: false
    }, {
        descriotion: "Go on 24-hour adventures and earn 50 coins. Be careful, you might hurt yourself!",
        avaible: false
    }]

    return (
        <div className="adventures-page">
            <h2 className="title"> Let's do something safe </h2>
            <div className="container">
                {easyQuests.map((quest, i) => <Card quest={quest} index={i + 1} />)}
            </div>
            <h2 className="title"> Let's risk some lifes </h2>
            <div className="container">
                {adwancedQuests.map((quest, i) => <Card quest={quest} index={i + 1} />)}
            </div>
        </div>
    );
}

export default Adventures;
