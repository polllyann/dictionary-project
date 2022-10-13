import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
    return (
        <div className="Phonetics">
            <ReactAudioPlayer
        src={props.phonetic.audio}
        controls
        className="speaker mt-1  bg-white"
      />
            <br />
            {props.phonetic.text}
        </div>
    );
}