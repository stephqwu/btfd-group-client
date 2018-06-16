import React, { Component } from "react";
import { PageHeader, ListGroup } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            notes: []
        };
    }

    renderNotesList(notes) {
        return null;
    }

    renderLander() {
        return (
            <div className="lander">
                <h1>Buy the fucking dip</h1>
                <p>A simple live trading app</p>
            </div>
        );
    }

    renderNotes() {
        return (
            <div className="notes">
                <PageHeader>Your portfolio</PageHeader>
                <ListGroup>
                    {!this.state.isLoading && this.renderNotesList(this.state.notes)}
                </ListGroup>
            </div>
        );
    }

    render() {
        return (
            <div className="Home">
                {this.props.isAuthenticated ? this.renderNotes() : this.renderLander()}
            </div>
        );
    }
}