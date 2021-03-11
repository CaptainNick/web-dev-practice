import React, { Component } from 'react';
import './Person.css'; //import css file | webpack takes cares of rest
//create a component
//function keyword
function person1() {
    return <h2></h2>
}

//ES5 syntax (variable holgin function)
var person2 = function() {
    return
}


//ES6 syntax

//dynamic
// const person = () => {
//     return <p>I'm a person! and I'm { Math.floor(Math.random() * 30) } years old.</p> // dynamic
// };


//WORKING w/ PROPS means the attributes in our JSX tag from our component [[this is a STATELESS Component]]
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I'm { props.age } years old</p>
            <p>{props.children} </p> 
            {/*two way binding using event and handler + change name dynamically ALSO make sure onChange attribute is always set when using value attribute otherwise the input tdoesnt change*/}
            <input type='text' onChange={props.changed} value={props.name} />
        </div>
    );
}
// WHEN using CLASS-based components arttribute reference is as `this.props`
// class Person extends Component {
//     render(){
//         return <p> My name is : {this.props} </p>;
//     }
// }

export default person;