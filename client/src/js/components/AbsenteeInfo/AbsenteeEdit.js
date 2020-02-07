import React from 'react';

class AbsenteeEdit extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <div> 
                    <textarea placeholder='Enter notes'></textarea>
                    <div className="">
                        <select defaultValue='' name='excuseOrNa' className="">
                            <option value={0}>Excused or Not</option>
                            <option id='excuseOrNa-1' value={1} className=''>Excused</option>
                            <option id='excuseOrNa-2' value={2} className=''>Not Excused</option>
                        </select>
                    </div>
                    <br />
                    <button className='' onClick={this.props.closeEditWindow()}>Save</button>
                </div>
            </React.Fragment>
        );
    }
}

export default AbsenteeEdit