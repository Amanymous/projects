// ====================Section 2=================
// import React, { Component } from "react";
// import "./App.css";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [
//         {
//           name: "Frankenstein",
//           id: "1"
//         },
//         {
//           name: "Dracula",
//           id: "2"
//         },
//         {
//           name: "Zombie",
//           id: "3"
//         },
//       ]
//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         {this.state.monsters.map(monster => (
//           <h1 key={monster.id}> {monster.name}</h1>
//         ))}
//       </div>
//     );
//   }
// }
// export default App;




//==================Section 1========================
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component{
//   constructor(){
//       super()
//           this.state={
//               string:'hi there'
//           }
//       }

// render(){
//   // div ma className is waja sy likhty hain taky class
//   // or class component ma farak pta chaly
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* this state string ko print karwany ka method ha ya */}
//         {this.state.string}
//         <button onClick={()=>this.setState({string:'hi aman'})}>Change text</button>
//       </header>
//     </div>
//   );
// }}

// export default App;

 // =============Section 3 ==================
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// // mane yaha sy component method 
// // hata ky React.Component use kiya ha
// class App extends React.Component{
//   constructor(){
//       super()
//           this.state={
//               string:'hi there'
//           }
//       }

// render(){
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {this.state.string}
//         <button onClick={()=>this.setState({string:'hi aman'})}>Change text</button>
//       </header>
//     </div>
//   );
// }}
// //  jsonplaceholder.typicode.com/users
// export default App;


// =============Section 4 life cycle methods ==================
// import React, { Component } from "react";
// import "./App.css";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: []
//     };
//   }
// // componentDidMount ye life cycle method hain
//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response=>response.json())
//   // means ky promise karraha ha json format ma return hoga
//     // .then(users=>console.log(users))
//     .then(users=>this.setState({ monsters: users}))
//   }

//   render() {
//     return (
//       <div className="App">
//         {this.state.monsters.map(monster => (
//           <h1 key={monster.id}> {monster.name}</h1>
//         ))}
//       </div>
//     );
//   }
// }
// export default App;

// =================Section 5 Monster App========================
// import React, { Component } from "react";
// import { CardList } from './components/card-list/card-list.component';

// import "./App.css";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: []
//     };
//   }
//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response=>response.json())
//     .then(users=>this.setState({ monsters: users}))
//   }

//   render() {
//     return (
//       <div className="App">
//         <CardList name='Aman'>
//           <h1>Aman</h1>
//         {this.state.monsters.map(monster => (
//           <h1 key={monster.id}> {monster.name}</h1>
//         ))}
//          </CardList>
//       </div>
//     );
//   }
// }
// export default App;
// =========================Section 6=================================
import React, { Component } from "react";
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      SearchField:'',

    };
    // this.handleChange=this.handleChange.bind(this);
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({ monsters: users}))
  }
  
// onChange={e=>console.log(e.target.value)}/>
// ye on console sy onChange ma check karny ka tarika ha

// onChange={e => { 
//   this.setState({SearchField:e.target.value},
//     ()=>
//   console.log(this.state))
//   }}
// onChangethis.setState({SearchField:e.target.value},()=>
// is waja sy likha tha ku ky search feild ma jb koi word 
// enter karty hain to console ma phely " " empty na ay  
  
onSearchChange=event=>{
  this.setState({SearchField:event.target.value})
}
render() {
    const { monsters,SearchField }=this.state;
    //smart way to write it monster,SearchField 
    const filteredMonsters=monsters.filter(monster=>
    monster.name.toLowerCase().includes(SearchField.toLowerCase())
    )
    // const monsters=this.state.monsters;
    // const SearchField=this.state.SearchField;
    return (
      <div className="App">
        <h1>Monster Hub</h1>
        <SearchBox 
        onSearchChange={this.onSearchChange}
        // handleChange={e =>this.setState({ SearchField: e.target.value})}
        // ye is wja sy comment out kiya ha ku render ky uper handleChange ka function ha
          />

        {/* <input 
        type='search' 
        placeholder='search monsters'
        onChange={e =>this.setState({SearchField:e.target.value})}
        /> */} 
        {/* ye sara kam comment is waja sy kiya h
        ku ky search-box ky folder ma shift kardiya ha */}
          {/* <CardList monsters={this.state.monsters}/> */}
          <CardList monsters={filteredMonsters}/>

      </div>
    );
  }
}
export default App;

