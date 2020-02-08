import React from 'react';

export default class AbsenteeItem extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.handleOnClick(this.props);
    }

    render(){
    
    return (
        <div>
            <button onClick={this.handleClick}></button>
        </div>
    )
    }
}