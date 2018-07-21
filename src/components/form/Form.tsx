import * as React from 'react';
import './Form.css';
import {FormState} from "./types/FormState";
import { addTask } from "../../store/actions/task-actions";
import {connect} from "react-redux";
import {FormProps} from "./types/FormProps";

class Form extends React.Component<FormProps, FormState> {

    constructor(props: FormProps, context: any) {
        super(props, context);
        this.state = {
            currentTask: "",
            nextTaskId: 0
        }
    }

    public render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="add a task"
                       onChange={this.inputChange} value={ this.state.currentTask }/>
                <button type="submit">Add task</button>
            </form>
            )
    }


    private onAddTask() {
        this.props.onAddTask({
            id: this.state.nextTaskId,
            description: this.state.currentTask
        });
        this.updateStateOnSubmit();
    }

    private updateStateOnSubmit() {
        this.setState({
            currentTask: "",
            nextTaskId: this.state.nextTaskId + 1
        })
    }

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>) :void => {
        e.preventDefault();
        this.onAddTask();
    }


    private inputChange = (e: any) => {
        console.log('Got value: ', e.target.value);
        this.setState({
            currentTask: e.target.value,
        });
    }
}

const mapActionsToProps = {
    onAddTask: addTask
};

export default connect(undefined, mapActionsToProps)(Form);
