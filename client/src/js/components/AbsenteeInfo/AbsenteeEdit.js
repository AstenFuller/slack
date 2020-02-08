import React from 'react';

class AbsenteeEdit extends React.Component {
    constructor(props) {
        super(props);
        this.handleNotes = this.handleNotes.bind(this);
        this.handleExcused = this.handleExcused.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleNotes(e) {
        this.props.handleEditNotes(e.target.value);
    }

    handleExcused(e) {
        this.props.handleExcusedValue(e.target.value);
    }

    handleSave() {
        this.props.handleSave();
    }

    render() {
        return (
            <React.Fragment>
                <div> 
                    <textarea placeholder='Enter notes' onChange={this.handleNotes} value={this.props.notes}></textarea>
                    <div>
                        <select defaultValue='Excused or Not' name='excuseOrNa' onChange={this.handleExcused}>
                            <option id='excuseOrNa-2' value={false} className=''>Not Excused</option>
                            <option id='excuseOrNa-1' value={true} className=''>Excused</option>
                        </select>
                    </div>
                    <br />
                    <button className=''  onClick={this.handleSave} >Save</button>
                </div>
            </React.Fragment>
        );
    }
}

export default AbsenteeEdit