import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css'

export const CardList = props => ( // props are the properties which it get from the CardList component in App.js
     <div className='card-list'>
          {props.monsters.map(monster =>( //props is giving monsters, iterating over the monsters array
            <Card key={monster.id} monster={monster} /> //sending monter as props to Card Component
          ))}
    </div> // props.children is the data between the tag of component
);