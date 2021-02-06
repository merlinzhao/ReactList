import React from "react"

import "../Style/App.css"


function TodoItem(props) {
    return (
        <div className="TodoItem">
            <input type="checkbox"></input>
            <p>{props.placeholder}</p>
            <p style={{ display: !props.subheading && "none" }}>Hello{props.subheading}</p>
        </div>
    )
}

export default TodoItem