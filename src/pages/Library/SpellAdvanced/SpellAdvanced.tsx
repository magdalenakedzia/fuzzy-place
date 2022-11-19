import { TBook } from "../types";
import { Book } from "../../../components/Book";

const list =
{
    "page_number": 2,
    "total_record_count": 2,
    "records": [{
        name: "Coming soon",
        decription: "",
        avaible: false,
        price: 10,
        image: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1631887/magic-wand-clipart-md.png"
    },
    {
        name: "Coming soon",
        decription: "",
        avaible: false,
        price: 20,
        image: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1631887/magic-wand-clipart-md.png"
    },
    ]
}

function SpellAdvanced({ setActiveClass }: TBook) {
    return (
        <Book
        setActiveClass={setActiveClass}
        type=""
        list={list}
    />
    );
}

export default SpellAdvanced;
