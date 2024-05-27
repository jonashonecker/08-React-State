import CharacterCard from "./CharacterCard.tsx";

export default function ErrorMessage(){
    return (
        <CharacterCard id={0} name={"Sorry, I couldn't find your character..."} image={"https://rickandmortyapi.com/api/character/avatar/19.jpeg"}/>
    )
}