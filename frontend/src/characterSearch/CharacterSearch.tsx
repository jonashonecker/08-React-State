import {Character, response} from "./characters.ts";
import {ChangeEvent, useState} from "react";
import CharacterCard from "./CharacterCard.tsx";
import ErrorMessage from "./ErrorMessage.tsx";
import CharacterSearchInteractions from "./CharacterSearchInteractions.tsx";

export default function CharacterSearch() {
    const characters: Character[] = response.results;
    const [filteredCharacters, setFilteredCharacters] = useState<Character[]>(response.results);

    const filterCharacters = (event: ChangeEvent<HTMLInputElement>) => {
        setFilteredCharacters(characters.filter(character => character.name.toLowerCase().includes(event.target.value.toLowerCase())))
    };

    const getRandomCharacter = () => characters[Math.floor(Math.random() * characters.length)];

    const displayFiveRandomCharacters = () => {
        const characterList: Character[] = [];
        while (characterList.length < 5) {
            const randomCharacter = getRandomCharacter();
            if (!characterList.includes(randomCharacter)) {
                characterList.push(randomCharacter);
            }
        }
        setFilteredCharacters(characterList);
    }

    return (
        <section>
            <CharacterSearchInteractions inputHandler={filterCharacters} buttonHandler={displayFiveRandomCharacters}/>
            <div className="Character__Container">
                {filteredCharacters.map((character) => (
                    <CharacterCard key={character.id} id={character.id} name={character.name} status={character.status}
                                   species={character.species} type={character.type} gender={character.gender}
                                   origin={character.origin} location={character.origin} image={character.image}
                                   episode={character.episode} url={character.url} created={character.created}/>
                ))}
            </div>
            {filteredCharacters.length === 0 && <ErrorMessage/>}
        </section>
    )
}