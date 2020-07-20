import React from 'react';
import UserItem from './UserItem';
import profile1 from '../images/delivery-man.png';
import profile2 from '../images/icons8-person-48.png';
import profile3 from '../images/icons8-person-fencing-96.png';
import profile4 from '../images/icons8-person-surfing-96.png';
import profile5 from '../images/person.png';
import profile6 from '../images/icons8-person-96.png';
import profile7 from '../images/icons8-flag-person-female-100.png';
import profile8 from '../images/icons8-old-person-96.png';
import profile9 from '../images/icons8-tall-person-96.png';
import profile10 from '../images/icons8-older-person-light-skin-tone-96.png';
import profile11 from '../images/icons8-neutral-person-dark-skin-tone-96.png';


let names = ["Sam", "Max", "Nancy", "Jane", "Clark", "John", "Jake", "Maxwell", "Ron", "Watson", "Emily"];
let credits = [20, 10, 30, 40, 50, 56, 34, 56, 34, 23, 34];

const UserList = (props) => {

    let pos = 0;

    for (let j = 0; j < names.length; j++) {
        if (names[j] === props.sender) {
            pos = parseInt(j);
        }
    }

    for (let i = 0; i < names.length; i++) {
        if (names[i] === props.name) {
            if (parseInt(props.credit) <= parseInt(credits[pos])) {
                credits[i] = parseInt(credits[i]) + parseInt(props.credit);
                credits[pos] = parseInt(credits[pos]) - parseInt(props.credit);
            } else {
                window.alert("Not enough credit!!!");
            }
        }
    }

    return (
        <div className="ui segment" style={{ marginTop: '20px', backgroundColor: 'lightyellow' }}>
            <UserItem profile={profile1} name={names[0]} credit={credits[0]} onSubmit={props.onSubmit} />
            <UserItem profile={profile2} name={names[1]} credit={credits[1]} onSubmit={props.onSubmit} />
            <UserItem profile={profile3} name={names[2]} credit={credits[2]} onSubmit={props.onSubmit} />
            <UserItem profile={profile4} name={names[3]} credit={credits[3]} onSubmit={props.onSubmit} />
            <UserItem profile={profile5} name={names[4]} credit={credits[4]} onSubmit={props.onSubmit} />
            <UserItem profile={profile6} name={names[5]} credit={credits[5]} onSubmit={props.onSubmit} />
            <UserItem profile={profile7} name={names[6]} credit={credits[6]} onSubmit={props.onSubmit} />
            <UserItem profile={profile8} name={names[7]} credit={credits[7]} onSubmit={props.onSubmit} />
            <UserItem profile={profile9} name={names[8]} credit={credits[8]} onSubmit={props.onSubmit} />
            <UserItem profile={profile10} name={names[9]} credit={credits[9]} onSubmit={props.onSubmit} />
            <UserItem profile={profile11} name={names[10]} credit={credits[10]} onSubmit={props.onSubmit} />
        </div>
    )
}

export default UserList;