import React,{useState} from 'react';
import './bugForm.css';
import BugModel from '../../../Models/bugModel';

export default (props) => {
    const [bugObject,setBugObject] = useState(new BugModel(props.bug))

    function inputChange(e) {
        setBugObject({
            ...bugObject,
            [e.target.name]: e.target.value
        });
    }
    return(
        <div className='bug-create'>
            {props.title === "Edit Bug" && <button className='close-btn' onClick={props.close}>X</button>}
            <h1>{props.title}</h1>
            <form>
                <label>Name</label>
                <input name='name' placeholder='Bug Name' required onChange={inputChange} value={bugObject.name}></input>
                <label>Details</label>
                <textarea name='details' placeholder='Describe your bug..' required onChange={inputChange} value={bugObject.details}></textarea>
                <label>Steps</label>
                <textarea name='steps' placeholder='Enter the steps to re-create the bug' required onChange={inputChange} value={bugObject.steps}></textarea>
                <label>Priority</label>
                <select name='priority' required onChange={inputChange} value={bugObject.steps}>
                    <option value='1'>High</option>
                    <option value='2'>Medium</option>
                    <option value='3'>Low</option>
                </select>
                <label>Assigned</label>
                <select name='assigned' required onChange={inputChange} value={bugObject.assigned}>
                    <option>Akshay Shinde</option>
                </select>
                <label>Application Version</label>
                <input name='version' placeholder='Application Version?' required onChange={inputChange} value={bugObject.version}></input>
                <button type='submit'>{props.title}</button>
            </form>
        </div>
    );
}