import * as React from 'react';
import './NameForm.css';
import {NameFormState} from "./types/NameFormState";
import {NameFormProps} from "./types/NameFormProps";
import {setName} from "../../store/actions/name-actions";
import {connect} from "react-redux";

class NameForm extends React.Component<NameFormProps, NameFormState> {

    constructor(props: NameFormProps, context: any) {
        super(props, context);
        this.state = {
            currentName: ""
        }
    }


    public render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Select your board name"
                       onChange={this.inputChange} value={ this.state.currentName }/>
                <button type="submit">Set name</button>
            </form>
            )
    }


    private onSetName() {
        console.log('Got new Name');
        this.props.onSetName({
            name: this.state.currentName
        });
    }


    private handleSubmit = (e: React.FormEvent<HTMLFormElement>) :void => {
        e.preventDefault();
        this.onSetName();
    }


    private inputChange = (e: any) => {
        this.setState({
            currentName: e.target.value,
        });
    }
}

const mapActionsToProps = {
    onSetName: setName
};

export default connect(undefined, mapActionsToProps)(NameForm);
