import * as React from 'react';
import {ITaskListProps} from "./types/ITaskListProps";
import {Task} from "../../model/Task";
import TaskCloseButton from "../task-close-button/TaskCloseButton";

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
            return (
                <div key={index}>
                    { task.description } { task.id }
                    <TaskCloseButton id={task.id}/>
                </div>
            );
        });
    }
}

export default TaskList;
