import React from "react";

function Footer({handleClick}) {
    return (
        <div>
            <div className="footer">
                <button id="addTaskButton" onClick={handleClick}>Add Task</button>
            </div>
        </div>
    )
}

export default Footer