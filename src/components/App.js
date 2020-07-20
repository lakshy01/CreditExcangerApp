import React from 'react';
import UserList from './UserList';

class App extends React.Component {

    state = { selectedname: '', selectedcredit: 0, sender: '' };

    onSearchItem = (recvname, credit, sendname) => {
        this.setState({
            selectedname: recvname,
            selectedcredit: credit,
            sender: sendname
        })
    }

    render() {
        return (
            <div className="ui container" style={{ backgroundColor: 'black' }}>
                <UserList name={this.state.selectedname} credit={this.state.selectedcredit} sender={this.state.sender} onSubmit={this.onSearchItem} />
            </div>
        )
    }
};

export default App;