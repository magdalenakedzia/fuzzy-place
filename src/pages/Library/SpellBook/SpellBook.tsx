import { TBook } from "../types";
import { Book } from "../../../components/Book";
const list =
{
    "page_number": 2,
    "total_record_count": 2,
    "records": [{
        name: "Freaze!",
        decription: "Your opponent is freezed for tour",
        avaible: true,
        price: 10,
        image: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1631887/magic-wand-clipart-md.png"
    },
    {
        name: "Shield!",
        decription: "Your defense is 4 points stronger (until the end of the fight)",
        avaible: false,
        price: 20,
        image: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1631887/magic-wand-clipart-md.png"
    },
    ]
}
function SpellBook({ setActiveClass }: TBook) {
    return (
        <Book
        setActiveClass={setActiveClass}
        type=""
        list={list}
    />
    );
}

export default SpellBook;
