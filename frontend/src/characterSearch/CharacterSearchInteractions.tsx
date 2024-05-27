import {ChangeEvent} from "react";
import './CharacterSearchInteractions.css'

type interactions = {
    inputHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    buttonHandler: () => void;
}

export default function CharacterSearchInteractions(props: interactions) {
    return (
        <div className="CharacterSearchInteractions">
            <input className="CharacterSearchInteractions__input" onChange={props.inputHandler}/>
            <button onClick={props.buttonHandler}>Click me!</button>
        </div>
    )
}