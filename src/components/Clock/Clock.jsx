import React, { useState, useMemo } from "react";
import clockImg from "./clock.png";

const Clock = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () =>
        setIsVisible(oldState => {
            const newState = !oldState;
            if (newState) {
                document.documentElement.classList.add("clock-visible");
            } else {
                document.documentElement.classList.remove("clock-visible");
            }
            return newState;
        });

    const renderClockContent = useMemo(() => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return (
            <div className="clock-content" onClick={toggleVisibility}>
                {hours}:{paddedMinutes}
            </div>
        );
    }, [isVisible]);

    const clockClasses = ["clock"];
    isVisible && clockClasses.push("clock-visible");
    return (
        <div className={clockClasses.join(" ")}>
            <img src={clockImg} onClick={toggleVisibility} />
            {isVisible ? renderClockContent : null}
        </div>
    );
};

export default Clock;
