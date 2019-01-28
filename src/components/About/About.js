import React, {Component} from 'react';
import './About.css';
import {withRouter} from 'react-router-dom';

class About extends Component {
    state = {
        phones: [
            {name: 'Samsung'},
            {name: 'Apple'},
            {name: 'Xiaomi'},
            {name: 'Huawei'},
        ]
    };

    on = () => {
        this.props.history.push('/country')
    };

    render() {
        return (
            <div className='About'>
                <button className={'btn'} onClick={this.on}>Go to Country</button>
                <hr/>
                {
                    this.state.phones.map((iphone, index) => (
                        <div key={index} className="iphoneBlock">
                            <h1 >{iphone.name}</h1>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default withRouter(About);