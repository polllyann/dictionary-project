import React from "react";
import Meanings from "./Meanings.js";
import Phonetics from "./Phonetics.js";
import "./Results.css";

export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results">
               <h2 className="mainWord">{props.results.word}</h2>
               {props.results.phonetics.map(function(phonetic, index) {
                return (
                    <div key={index}>
                        <Phonetics phonetic={phonetic} />
                        </div>
                );
               })}
               {props.results.meanings.map(function(meaning, index) {
                return <div key={index}>
                    <Meanings meaning={meaning} />
                    </div>;
               })}
            </div>
        );
    } else {
        return null;
    }
    
}