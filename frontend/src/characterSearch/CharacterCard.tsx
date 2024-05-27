import {Character} from "./characters.ts";

export default function CharacterCard(props: Character) {
    return (
        <article key={props.id} className="Character">
            <h2>{props.name}</h2>
            <p>{props.id}</p>
            <img src={props.image}/>
        </article>
    )
}