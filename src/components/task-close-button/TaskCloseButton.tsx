import * as React from 'react';
import {ITaskCloseButtonProps} from "./types/ITaskCloseButtonProps";
import {connect} from "react-redux";
import {deleteTask} from "../../store/actions/task-actions";

class TaskCloseButton extends React.Component<ITaskCloseButtonProps, {}> {

    constructor(props: ITaskCloseButtonProps, context: any) {
        super(props, context);
    }

    public handleClick = () => {
        console.log('got id: ', this.props.id);
        this.onRemoveTask();
    }

    public render() {
        return (
            <button className="primary" onClick={this.handleClick}>x</button>
        )
    };

    public onRemoveTask() {
        this.props.onRemoveTask(this.props.id);
    }
}

const mapActionsToProps = {
    onRemoveTask: deleteTask
};

export default connect(undefined, mapActionsToProps)(TaskCloseButton);
