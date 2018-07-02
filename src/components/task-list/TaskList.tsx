import * as React from 'react';
import {ITaskListProps} from "./types/ITaskListProps";
import {Task} from "../../model/Task";

class TaskList extends React.Component<ITaskListProps, {}> {

    constructor(props: ITaskListProps, context: any) {
        super(props, context);
    }

    public render() {
        return (
            <section>{ this.renderTasks() }</section>
        )
    };

    public renderTasks = () => {
        return this.props.tasks.map((task: Task, index: number) => {
            console.log('In mapping tasks...', task.description);
            return (
                <div key={index}>
                    { task.description } { task.id }
                </div>
            );
        });
    }
}

export default TaskList;
