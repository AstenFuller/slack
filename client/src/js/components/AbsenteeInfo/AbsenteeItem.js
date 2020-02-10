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
            <a onClick={this.handleClick}>{this.props.data.date.slice(0,10)}</a>
            <p>{this.props.data.excused ? ' ' + 'Excused': ' ' + 'Unexcused'}</p>
        </div>
    )
    }
}
