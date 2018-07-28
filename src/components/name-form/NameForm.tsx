import * as React from 'react';
import './NameForm.css';
import {NameFormState} from "./types/NameFormState";
import {NameFormProps} from "./types/NameFormProps";
import {setName} from "../../store/actions/name-actions";
import {connect} from "react-redux";
import {Button, Col, Grid, Row} from "react-bootstrap";

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
                <Grid>
                    <Row>
                        <Col sm={6} xs={12}>
                            <input className="form-input" type="text" placeholder="Select your board name"
                               onChange={this.inputChange} value={ this.state.currentName }/>
                        </Col>
                        <Col sm={6} xs={12}>
                            <Button bsStyle="info" type="submit">Set name</Button>
                        </Col>
                    </Row>
                </Grid>
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
