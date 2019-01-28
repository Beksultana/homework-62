import React, {Component} from 'react';
import './Home.css';

class Home extends Component {

    onClickAbout = () => {
        this.props.history.push('/about')
    };

    render() {
        return (
            <div className='Home'>
                <button className={'btn'} onClick={this.onClickAbout}>Go to About</button>
                <hr/>
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home;