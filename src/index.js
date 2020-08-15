import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player";

import StationList from "./components/StationList";

import "./style.scss";

const App = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [station, setStation] = useState("");
    const [url, setUrl] = useState("");

    const handleStationChange = (station, url) => {
        setStation(station);
        setUrl(url);
        setIsPlaying(true);
    };

    const resolvePlayingState = station ? (
        <>
            <div className="current-station">{station}</div>
            <button className="play-pause-btn" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? "STOP" : "PLAY"}
            </button>
        </>
    ) : null;

    return (
        <div className="player-container">
            {resolvePlayingState}
            <StationList onStationChange={handleStationChange} />
            <ReactPlayer url={url} playing={isPlaying} width="0" height="0" />
        </div>
    );
};

var root = document.getElementById("root");
ReactDOM.render(<App />, root);
