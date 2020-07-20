import React from 'react';

class Form extends React.Component {

    state = { recvname: '', credit: 0 };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.recvname, this.state.credit, this.props.username);
    }

    render() {
        return (
            <form className="ui form">
                <div className="three fields">
                    <div className="field">
                        <label>Receiver Name</label>
                        <input type="text" value={this.state.recvname} onChange={(e) => { this.setState({ recvname: e.target.value }) }} />
                    </div>
                    <div className="field">
                        <label>Credits</label>
                        <input type="number" value={this.state.credit} onChange={(e) => { this.setState({ credit: e.target.value }) }} />
                    </div>
                    <div className="field">
                        <button onClick={this.onFormSubmit} className="ui secondary button" style={{ marginTop: "23px" }}>Transfer</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Form;