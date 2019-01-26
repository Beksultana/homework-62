import React, {Component, Fragment} from 'react';
import './Countries.css';
import axios from 'axios';

class Country extends Component {

    state = {
        countries: [],
    };

    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all').then(countriesRespons => {
            console.log(countriesRespons.data);
            this.setState({countries: countriesRespons.data})
        })
    }

    gotoHomePage = () => {
        this.props.history.push('/')
    };

    render() {
        console.log(this.props);
        return (
            <Fragment>
                <button onClick={this.gotoHomePage}>Home</button>
                <hr/>
                <div className='Country'>
                    {
                        this.state.countries.map((country, index) => (
                            <div
                                key={index}
                                className="countryBlock"

                            >
                                <img
                                    className={'Countries'}
                                    src={country.flag} alt=""/>

                                <h3 {...this.props} className={'NameCountries'} key={index}>{country.name}</h3>
                            </div>
                        ))
                    }
                </div>
            </Fragment>
        );
    }
}

export default Country;