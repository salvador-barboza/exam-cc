import React from 'react';

export default class rangeVariable extends React.Component{
    state={
        from:0,
        to: 0
    }

    render(){
        return (
            <div>
            <p>De:</p>
            <form action="">
            <input type="text"/>
            <p>A:</p>
            <input type="text"/>
            <input type="submit" value="submit"/>
            </form>
            </div>
        )
    }
}