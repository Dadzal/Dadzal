import React, { Component } from 'react';
import Card from './Card';

 class Cardlist extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Card/>
                    <Card/>
                </div>
            </div>
        )
    }
}

export default Cardlist;
