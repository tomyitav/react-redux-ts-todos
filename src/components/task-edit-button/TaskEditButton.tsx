import * as React from 'react';
import {ITaskEditButtonProps} from "./types/ITaskEditButtonProps";
import {connect} from "react-redux";
import {deleteTask} from "../../store/actions/task-actions";
import {Button} from "react-bootstrap";

class TaskEditButton extends React.Component<ITaskEditButtonProps, {}> {

    constructor(props: ITaskEditButtonProps, context: any) {
        super(props, context);
    }

    public handleClick = () => {
        console.log('got id: ', this.props.id);
        this.onEditTask();
    }

    public render() {
        return (
            <Button bsStyle="warning" onClick={this.handleClick}>edit</Button>
        )
    };

    public onEditTask = () => {
        this.props.onEditTask(this.props.id);
    }
}

const mapActionsToProps = {
    onEditTask: deleteTask
};

export default connect(undefined, mapActionsToProps)(TaskEditButton);
