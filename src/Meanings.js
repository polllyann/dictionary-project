import React from "react";
import Synonyms from "./Synonyms.js";
import "./Meanings.css";

export default function Meanings(props) {
    return (
        <div className="Meanings">
        <h3 className="meaningWord">{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
            if (index < 1) {
            return (
                <div key={index}>
                    <p>
                    <strong>Meaning: </strong>
                    {definition.definition}
                    <div className="example">
                    <em>{definition.example}</em>
                    </div>
                    <br />
                    <Synonyms synonyms={definition.synonyms} />
                    </p>
                </div>
            );
            } else {
                return null;
            }
        })}
        </div>
    );
}