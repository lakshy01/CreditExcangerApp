import React from 'react';
import Form from './Form';

class UserItem extends React.Component {

    state = { show: false };

    onShowExtra = (event) => {
        this.setState({ show: true });
    }

    onFormUp = (event) => {
        this.setState({ show: false });
    }

    render() {


        const { profile, name, credit, onSubmit } = this.props;
        if (this.state.show) {
            return (
                <div className="ui items">
                    <div className="item">
                        <div className="ui small image">
                            <img src={profile} ></img>
                        </div>
                        <div className="content">
                            <a className="header">{name}</a>
                            <div className="meta">
                                <span>Description</span>
                            </div>
                            <div className="description">
                                <p>My name is {name} and I am thankful to this online platform for transferring money to the friends at my wish!!!!</p>
                                <p>{name}@gmail.com</p>
                            </div>
                            <div className="extra">
                                <h4>Credit Earned: {credit}</h4>
                                <a href="#" onClick={this.onFormUp}><i className="chevron circle up icon" /></a>
                                <Form username={name} onSubmit={onSubmit} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="ui large middle aligned divided list">
                    <div className="ui item" >
                        <div className="right floated content">
                            <div onClick={this.onShowExtra}><i className="chevron circle down icon"></i></div>
                        </div>
                        <img className="ui avatar image" src={profile} ></img>
                        <div className="content">
                            <h4>{name}</h4>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default UserItem;