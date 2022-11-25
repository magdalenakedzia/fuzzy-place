import { Egg, Cat, Dragon, Bird } from "../../components/Pet"
import Character from "./cardElement/Character"
import Power from "./cardElement/Power"
import FlyingLessons from "./cardElement/FlyingLessons"
import PractiseSpells from "./cardElement/PractiseSpells"
import CreatePotion from "./cardElement/CreatePotion"
import { TUser, TPet } from './types'
import "./styles.less";

function Home() {
    const me: TUser = {
        pet: {
            type: "egg",
            level: 0,
            attack: 0,
            defense: 0,
            speed: 0,
            life: 100,  //100%

        },
        look: {
            gender: "female",
            hair: "long",
            eyes: "green",
            hairColor: 'red',
            face: '2f'
        },
        character: {
            wand: null,
            robe: null,
            shoes: null,
            broom: null
        },
        skills: {
            attack: 0,
            defense: 0,
            speed: 0,
            life: 100,  //100%
            potionsLevel: 1,
        },
        power: {
            element: "fire",
            knownSpells: [{
                name: "Freaze!",
                level: 1,
                id: 1,
                element: "water",
            }],
            magicPoints: 10,
            magic: 100, //100%
        },
        gold: 50,
        potions: []

    }

    type TRenderPetsProps = {
        pet: TPet
    }
    const RenderPet = ({ pet }: TRenderPetsProps) => {
        switch (pet.type) {
            case "cat":
                return <Cat pet={pet} />
            case "dragon":
                return <Dragon pet={pet} />
            case "bird":
                return <Bird pet={pet} />
            default:
                return <Egg pet={pet} />
        }
    }
    return (
        <div className="home-page">
            <RenderPet pet={me.pet} />
            <Character />
            <Power />
            <FlyingLessons />
            <CreatePotion />
            <PractiseSpells />
        </div>
    );
}

export default Home;
