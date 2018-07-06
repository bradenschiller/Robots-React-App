import React from 'react';
import {robots} from './Robots';
import Card from './Cards'


const CardList = (props) => {
    const cardcomponent = robots.map((user, index) => {
        return <Card key={index} id={user.id} name={user.name} email={user.email} />
    })
    return (
        <div>
            {cardcomponent}
        </div>
    )
}

export default CardList;