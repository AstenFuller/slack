import React, { Component } from 'react';

class AppAbsenceC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            excuses: '0',
            notes: '',
            absences: [],
            newId: 0
        }



        this.absenteeInformation = this.absenteeInformation.bind(this);
        this.addNew = this.addNew.bind(this);
        this.editNote = this.editNote.bind(this);
        this.saveNote = this.saveNote.bind(this);
        this.selectOnChange = this.selectOnChange.bind(this);
    };



    absenteeInformation(e) {
        this.setState({ inputText: e.target.value });
    };

    addNew() {
        let absencesCopy = this.state.absences;
        absencesCopy.push({
            text: this.state.inputText,
            excuses: this.state.excuses,
            editable: false,
            id: this.state.newId += 1,
            completed: false,
        });
        this.setState({
            absences: absencesCopy,
        });

    };


    editNote(e) {
        let index = parseInt(e.currentTarget.id);
        let newList = this.state.absences.slice();
        for (let i = 0; i < newList.length; i++) {
            if (newList[i].id === index) {
                newList[i].editable = true;
                newList[i].completed = false
            }
        };
        this.setState({
            absences: newList,
        })
    };

    saveNote(i, id, text, excuses) {
        let absencesCopy = this.state.absences.slice();
        let newAbsence = {
            text,
            excuses,
            editable: false,
            id,
            completed: false

        }
        absencesCopy.splice(i, 1, newAbsence);
        this.setState({ absences: absencesCopy });
    };

    selectOnChange(event) {
        this.setState({ excuses: event.target.value });
    };




    render() {
        let fullabsences = this.state.absences.map((notes, index) => {
        });


        return (

            <div className=''>

                <div className='card-header' id=''></div>

                <div className=''>
                    <textarea id='' placeholder='' className='' value={this.state.inputText} onChange={this.onInputChange} />
                </div>

                <div className=''>
                    <select name='excuses' className="" onChange={this.selectOnChange}>
                        <option value={0}>Excused or NE</option>
                        <option id='excuses-1' value={1} className='excusesList'>Excused</option>
                        <option id='excuses-2' value={2} className='excusesList'>Not Excused</option>
                    </select>
                </div>
                <div className='card-footer' id=''>
                    <button className='saveNoteEdit' onClick={() => { this.addNew() }} type='button' id=''>Save</button>
                </div>

                <div className=''>
                </div>
                <div className='card' id=''>
                    <div className='card-header' id=''></div>
                    <div className=''>
                        {this.state.absences.length === 0 ? <strong></strong> : <strong></strong>}
                        <br></br>
                        {this.state.absences.length === 0 ? '' : <ul>{fullabsences}</ul>}
                    </div>

                </div >
            </div >
            // </div>
            //   </div>
        );
    }
};

export default AppAbsenceC