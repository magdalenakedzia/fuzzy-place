import { TBook } from "../types";
import { Book } from "../../../components/Book";

function PotionsBook({ setActiveClass }: TBook) {
    const poisonsList =
    {
        "page_number": 2,
        "total_record_count": 2,
        "records": [{
            name: "Make them weaker",
            decription: "This poison can take your enemy attack less efective (last for 1 round)",
            avaible: true,
            price: 10,
            image: "https://static.vecteezy.com/system/resources/previews/011/028/624/non_2x/simple-illustration-of-a-colored-poison-bottle-free-png.png"
        },
        {
            name: "Fire flame",
            decription: "You can double your attack by drinking it (it will long to the end of battle)",
            avaible: false,
            price: 20,
            image: "https://static.vecteezy.com/system/resources/previews/011/028/624/non_2x/simple-illustration-of-a-colored-poison-bottle-free-png.png"
        },
        ]
    }

    return (
        <Book
            setActiveClass={setActiveClass}
            type="poison"
            list={poisonsList}
        />
    );
}

export default PotionsBook;
