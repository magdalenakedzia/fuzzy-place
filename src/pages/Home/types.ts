
export type TPet = {
    type: string,
    level: number,
    attack: number,
    defense: number,
    speed: number,
    life: number,
}

type TLook = {
    gender: string, //change to enum
    hair: string, //change to enum
    eyes: string, //change to enum
    hairColor: string, //change to enum
    face: string, //change to enum
}
type TCharacter = {
    wand: string | null,
    robe: string | null,
    shoes: string | null,
    broom: string | null
}

type TSpell = {
    name: string,
    level: number,
    id: number,
    element: string,
}

type TSkills = {
    attack: number,
    defense: number,
    speed: number,
    life: number,  //100%
    potionsLevel: number,
}

type TPower = {
    element: string,
    knownSpells: TSpell[],
    magicPoints: number,
    magic: number, //100%
}
export type TUser = {
    pet: TPet,
    look: TLook,
    character: TCharacter,
    skills: TSkills,
    power: TPower,
    gold: number,
    potions: any[] //add it later 

}