import "./style.less";

const Girl = () => {
    return (
        <div className="girl-character">
            <div className="container">
                <div className="girl">
                    <div className="hat"></div>
                    <div className="hair-front"></div>
                    <div className="head">
                        <div className="brows">
                            <div className="brow-left"></div>
                            <div className="brow-right"></div>
                        </div>
                        <div className="eyes">
                            <div className="eye-left"></div>
                            <div className="eye-right"></div>
                        </div>
                        <div className="nose"></div>
                        <div className="mouth"></div>
                    </div>
                    <div className="hair-back"></div>
                    <div className="neck"></div>
                    <div className="upper-body"></div>
                    <div className="arms">
                        <div className="arm-left"></div>
                        <div className="arm-right"></div>
                    </div>
                    <div className="dress">
                        <div className="top"></div>
                        <div className="bottom"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Girl;