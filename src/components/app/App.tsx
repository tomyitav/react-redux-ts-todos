import TodoHeader from '../todo-header/TodoHeader';
import * as React from 'react';
import './App.css';
import TaskList from "../task-list/TaskList";
import {IState} from "./types/IState";
import {IProps} from "./types/IProps";
import {connect} from "react-redux";
import {IAppState} from "../../store/AppStore";
import Form from "../form/Form";

class App extends React.Component<IProps, IState> {

    constructor(props: IProps, context: any) {
        super(props, context);
    }

    public render() {
        return (
            <div className="App">
                <TodoHeader name="Tom"/>
                <Form/>
                <TaskList tasks={this.props.tasks}/>
            </div>
        );
    }
}

const mapStateToProps = (state: IAppState) => ({
    tasks: state.tasks,
})

export default connect(mapStateToProps)(App);
