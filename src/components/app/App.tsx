import TodoHeader from '../todo-header/TodoHeader';
import * as React from 'react';
import './App.css';
import TaskList from "../task-list/TaskList";
import {IState} from "./types/IState";
import {IProps} from "./types/IProps";
import {connect} from "react-redux";
import {IAppState} from "../../store/AppStore";
import {default as TaskForm} from "../task-form/TaskForm";
import NameForm from "../name-form/NameForm";

class App extends React.Component<IProps, IState> {

    constructor(props: IProps, context: any) {
        super(props, context);
    }

    public render() {
        return (
            <div className="App">
                <TodoHeader name={this.props.name}/>
                <TaskForm/>
                <br/>
                <NameForm/>
                <br/>
                <TaskList tasks={this.props.tasks}/>
            </div>
        );
    }
}

const mapStateToProps = (state: IAppState) => ({
    tasks: state.tasks,
    name: state.name.name
})

export default connect(mapStateToProps)(App);
