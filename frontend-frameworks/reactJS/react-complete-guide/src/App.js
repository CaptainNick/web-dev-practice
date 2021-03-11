import React from 'react';
//{ useState } from 'react';
import { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// CLASS-based component
class App extends Component {
  //props are managed or passed from outside the component
  // state is managed from inside the component (and only used for CLASS-based react component/ Hooks is different)
  state = {
    persons: [
      { id:'asdf', name: 'Max', age: 28},
      { id:'sdfg', name: 'Manu', age: 29},
      { id:'dfgh', name: 'Mani', age: 26},

    ],
    otherState: 'someValue',
    showPersons: false // we can use ternary expressions to write JS instructions in JSX parts of components
  }
  // whenever State property is changed it makes the react DOM re-render our component

  switchNameHandler = (newName) => {
    //console.log('this was clicked'); //this keyword in the handler function will give errors it is not same as the `this` we use to refer the component
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian' // we should mutate the state directly like here
    //Component object from imported from react allows us to update state property and it then ensures that react acts upon the changes and then updates the DOM

    this.setState( {
      persons: [
        { name: newName, age: 28},
        { name: 'Manu', age: 29},
        { name: 'Mani', age: 13},
      ]
     } )
  }

  //event handler function for two way binding exercise + dynamic name update
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]}; //immutable state change - copy the object
    // OR CAN USE - const person = Object.assign({}, this.state.persons[personIndex];)

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( {persons: persons}); //FLEXIBLE EDITING LISTS no more error/warning in console

    // this.setState( {
    //   persons: [
    //     { id:'asdf', name: 'Max', age: 28},
    //     { id:'sdfg', name: event.target.value, age: 29},
    //     { id:'dfgh', name: 'Mani', age: 13},
    //   ]
    //  } )
  }
  
  togglePersonsHandler  = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }

  //lists and state (but this approach has a flaw)
  deletePersonsHandler = (personIndex) => {
    //const persons = this.state.persons.slice();//slice w/out args copies the array into the new array
    //to update state Immutably we can use Spread operator
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
    
  }

  render() {
    const style = {
      backgroundColor: 'green', //dynamically changing CSS
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',

    };
    //handling dynamic content JS way - using if else statements
    let persons = null; // everything in render() gets executed every time React renders the web page

    if (this.state.showPersons){
      persons = (
        <div>
          {/* Outputting list --> by mapping the persons array to the array form we want*/}
          {this.state.persons.map((person, index) => {
            return <Person 
                    click={() => this.deletePersonsHandler(index)}
                    name={person.name} 
                    age={person.age} 
                    key={person.id}
                    changed={(event) => this.nameChangedHandler(event, person.id)} />
                    
          })}

          {/* The person components no more needed after we can output them by Mapping the person array to person components
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            //{/*passing method references between components*/}
            {/* click={this.switchNameHandler.bind(this, 'Max!')} >My Hobbies: Swimming</Person>
          {/* <Person name='Manu' age='23'/>  */}
          {/* <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler} />
          <Person 
            name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/> */}
        </div> 
      );

      //Dynamic styling
      style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <h1>Hi, I'm a ReactApp</h1>
        {/*<button 
          style={style}
          onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name </button> 
          /* the above button is for switching Names - dynamic change in Name */ }
        {/**Dont use `this.switchNameHandler()` this will execute the funciton whent the component is rendered in DOM, we only need to pass a reference to the function as handler */}
        
        {/* Below button is used for Rendering content Conditionally (Hide person tag on conditions)*/}
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Person</button> 

        { /* {this.state.showPersons ? <div>has person tags here </div> : null} --->this is ternary expression for toggling */}
        {/* For better handling of conditionaly conent move the Person JSX <div> to the if else statement for better conditional rendering*/}
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a ReactApp!!!') )
  }
}

export default App;

// useState() Hook for state Manipulation
// function based component
// const app = (props) => {
//   const [ personsState, setPersonsState] = useState({
//   //const stateArr = useState({
//     persons: [
//       { name: 'Max', age: 28},
//       { name: 'Manu', age: 29},
//       { name: 'Mani', age: 26},

//     ],
//     otherState: 'someValue'
//   });
//   //functions inside funtion for handlers
//   const switchNameHandler = () => {
    
//     setPersonsState ( {
//       persons: [
//         { name: 'Maximilian', age: 28},
//         { name: 'Manu', age: 29},
//         { name: 'Mani', age: 13},
//       ],
//       //include other state data that doesnt need to be changes
//       otherState: personsState.otherState // or can use multiple useState() 
//      } )
//   }

//   return (
//     <div className="App">
//       <h1>Hi, Im a ReactApp</h1>
//       <button onClick={switchNameHandler}>Switch Name </button> {/*here this.switchNameHandler no more require this keywords since we aren't in class components anymore*/}
//       {/*Dont use `this.switchNameHandler()` this will execute the funciton whent the component is rendered in DOM, we only need to pass a reference to the function as handler */}
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My Hobbies: Swimming</Person>
//       {/* <Person name='Manu' age='23'/>  */}
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//     </div>
//   );
// }

// export default app;
//////////////////////// 
// When using hooks the state object gets modified to the new state object 
// unlike class components that merge the new state object to previous state object and keeps the rest of the properties as it is
///////////////////////////

