import {Character, response} from "./characters.ts";
import {ChangeEvent, useState} from "react";
import CharacterCard from "./CharacterCard.tsx";
import ErrorMessage from "./ErrorMessage.tsx";

export default function CharacterSearch() {
    const characters: Character[] = response.results;
    const [filteredCharacters, setFilteredCharacters] = useState<Character[]>(response.results);

    const filterCharacters = (event: ChangeEvent<HTMLInputElement>) => {
        setFilteredCharacters(characters.filter(character => character.name.toLowerCase().includes(event.target.value.toLowerCase())))
    };
    return (
        <section>
            <input onChange={filterCharacters}/>
            <div className="Character__Container">
                {filteredCharacters.map((character) => (
                    <CharacterCard id={character.id} name={character.name} status={character.status}
                                   species={character.species} type={character.type} gender={character.gender}
                                   origin={character.origin} location={character.origin} image={character.image}
                                   episode={character.episode} url={character.url} created={character.created}/>
                ))}
            </div>
            {filteredCharacters.length === 0 && <ErrorMessage/>}
        </section>
    )
}