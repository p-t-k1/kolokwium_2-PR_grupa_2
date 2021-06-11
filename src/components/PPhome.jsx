import React, {Component, useState} from "react";

class PPhome extends Component {
    state = {
        visibility: false
    }

    setVisible = () => {
        this.setState({visibility: true});
    }
    setHidden = () => {
        this.setState({visibility: false});
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    {this.state.visibility ? <div className="alert alert-dark" role="alert">
                        This is a dark alert with <a href="#" className="alert-link">an example link</a>. Give it a
                        click if you like.
                    </div> : null }
                    <button onClick={this.setVisible}>Pokaż</button>
                    <button onClick={this.setHidden}>Ukryj</button>
                </div>
            </React.Fragment>
        )
    }
}

export default PPhome;