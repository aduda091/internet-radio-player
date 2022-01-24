import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player";

import contentModes from "./constants/contentModes";
import StationList from "./components/StationList";

import "./style.scss";
import ShowsList from "./components/ShowsList/ShowsList";
import Clock from "./components/Clock/Clock";

const App = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [mode, setMode] = useState(contentModes.RADIO);
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

    const resolveDisplayMode = () => {
        switch (mode) {
            case contentModes.RADIO:
                return <StationList onStationChange={handleStationChange} />;
            case contentModes.SHOWS:
                return <ShowsList onStationChange={handleStationChange} />;
        }
    }

    const resolveSwitchMode = () => {
        switch (mode) {
            case contentModes.RADIO:
                return (
                    <div className="mode-switch">
                        <button onClick={() => setMode(contentModes.SHOWS)}>Emisije</button>
                    </div>
                );
            case contentModes.SHOWS:
                return (
                    <div className="mode-switch">
                        <button onClick={() => setMode(contentModes.RADIO)}>Radio</button>
                    </div>
                );
        }
    }

    return (
        <div className="player-container">
            <Clock />
            {resolvePlayingState}
            {resolveDisplayMode()}
            {resolveSwitchMode()}
            <ReactPlayer url={url} playing={isPlaying} width="0" height="0" />
        </div>
    );
};

var root = document.getElementById("root");
ReactDOM.render(<App />, root);
