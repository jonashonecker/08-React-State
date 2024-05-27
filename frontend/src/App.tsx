import './App.css'
import {response} from "./characters.ts";
import {ChangeEvent, useState} from "react";

type origin = {
    name: string
    url: string
}

type location = {
    name: string
    url: string
}

type Character = {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: origin,
    location: location,
    image: string,
    episode: string[],
    url: string,
    created: string
}

function App() {
    const characters: Character[] = response.results;
    const [filteredCharacters, setFilteredCharacters] = useState<Character[]>(response.results);

    const filterCharacters = (event: ChangeEvent<HTMLInputElement>) => {
        setFilteredCharacters(characters.filter(character => character.name.toLowerCase().includes(event.target.value.toLowerCase())))
    };

    return (
        <>
            <input onChange={filterCharacters}/>
            {filteredCharacters.map((character) => (
                <p key={character.id}>{character.name}</p>
            ))}
            {filteredCharacters.length === 0 && <p>Sorry, I couldn't find your character...</p>}
        </>
    )
}

export default App
