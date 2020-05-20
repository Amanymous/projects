// ====================Section 5================================
// import React from 'react';
// import './card-list.styles.css';

// export const CardList=props=>{
//     console.log(props)
//     // yahan props.children is waja sy likha 
//     //  CardList ky name='Aman' ha taky ye isko print kary
//     return <div className='card-list'>{props.children}</div>
// }
// =====================Section 6==============================
import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component'

export const CardList=props=>(
    //yahan return statement nai ha is waja () use kiye hain
    <div className="card-list">
        {props.monsters.map(monster=>(
            // <h1 key={monster.id}>{monster.name}</h1>
            // h1 ko is waja sy comment kiya ku ky card.component.jsx
            // Card name prop banaya ha
        <Card key={monster.id} monster={monster}/>
        ))}
    </div>
);