import * as React from 'react';
import {ITaskListProps} from "./types/ITaskListProps";
import {Task} from "../../model/Task";
import TaskCloseButton from "../task-close-button/TaskCloseButton";
import {Grid, Table} from "react-bootstrap";
import TaskEditButton from "../task-edit-button/TaskEditButton";

class TaskList extends React.Component<ITaskListProps, {}> {

    constructor(props: ITaskListProps, context: any) {
        super(props, context);
    }

    public render() {
        return (
            <Grid>
                <Table striped={true} bordered={true} hover={true}>
                    <thead>
                        <tr>
                            <th>task</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderTasks() }
                    </tbody>
                </Table>
            </Grid>
        )
    };

    public renderTasks = () => {
        return this.props.tasks.map((task: Task, index: number) => {
            return (
                <tr key={index}>
                    <td>{ task.description }</td>
                    <td>
                        <TaskEditButton id={task.id}/>
                        <TaskCloseButton id={task.id}/>
                    </td>
                </tr>
            );
        });
    }
}

export default TaskList;
