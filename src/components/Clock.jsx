import React, { useState } from "react";

const timeStyle = {
    textAlign: "center",
    marginTop: "100px"
}

function Clock() {

    

    const now = new Date().toLocaleTimeString();

    const [time, setTime] = useState(now);

    function getTime() {

        const newTime = new Date().toLocaleTimeString();

        setTime(newTime);

    }

    setInterval(getTime, 1000);

    return(

        <div>

            <h1 style={timeStyle}>{time}</h1>

        </div>
    )
}

export default Clock;