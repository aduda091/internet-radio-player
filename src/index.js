import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player";

import StationList from "./components/StationList";

import "./style.scss";

const App = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [station, setStation] = useState("");
    const [url, setUrl] = useState("");
    const oldUrl = useRef("");

    const handleStationChange = (name, url) => {
        setStation(name);
        setUrl(url);
        setIsPlaying(true);
        oldUrl.current = url;
    };

    const offlineHandler = () => {
        console.log("offline");
        setIsPlaying(false);
    }
    const onlineHandler = () =>{
        console.log("online");
        setIsPlaying(false);
        setTimeout(() => {
            if (url) {
                setIsPlaying(true);
            } else if (oldUrl.current) {
                setUrl(oldUrl.current);
                setIsPlaying(true);
            } else {
                alert("no url :O");
            }
        }, 1500);
    }

    useEffect(() => {
        
        window.addEventListener("offline", offlineHandler);

        window.addEventListener("online", onlineHandler);
        return () => {
            window.removeEventListener("online", onlineHandler);
            window.removeEventListener("offline", offlineHandler);
        }
    }, [])

    const resolvePlayingState = station ? (
        <>
            <div className="current-station">{station}</div>
            <button className={`play-pause-btn ${isPlaying ? "stop-btn" : "play-btn"}`} onClick={() => setIsPlaying(!isPlaying)}>
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
