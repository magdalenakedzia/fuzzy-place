import "./styles.less";
import { TAnimalProps } from "../types";

function Egg({ pet }: TAnimalProps) {
    return (
        <div className="egg">
            <em></em>
        </div>
    );
}

export default Egg;
