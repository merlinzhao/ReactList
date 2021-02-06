
import React, { Component } from "react"
import TodoItem from "./components/TodoItem"

import todosData from "./todoData"

import "./Style/App.css"

// function App() {
//     const name = "Merlin"
//     const date = new Date()

//     const style1 = { color: "blue" }
//     return (

//         <div>
//             <h1 style={{ color: "cyan " }}>Hello, my name is {name}</h1>
//             <h3 style={style1}>It is currentlly {date.getHours() % 12}</h3>
//             <TodoItem placeholder="Placeholder 1" subheading="subheading 1" />
//             <TodoItem placeholder="Placeholder 2" />
//             <TodoItem placeholder="Placeholder 3" subheading="subheading 3" />
//             <TodoItem placeholder="Placeholder 4" subheading="subheading 4" />
//         </div>
//     )
// }

class App extends React.Component {

    constructor() { //initialize some values
        super() //always add super
        this.state = { answer: "Merlin's answer :)", isTure: false } //always object
    }
    myMethod() {
        return "Hello"

    }
    render() {
        const test = this.myMethod()
        const date = new Date();
        return (
            < div ><h1> Test {this.state.answer}</h1></div>

        )
    }
}

class Greeting extends Component {
    render() {
        const date = new Date()

        return (<p>Hello</p>)
    }
}
export default App