import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';


export default class App extends Component {
    render() {
        return (
            <div>
                <h1>RoboFriends</h1>
                {/* <SearchBox /> */}
                <CardList />
            </div>
        );
    }
}