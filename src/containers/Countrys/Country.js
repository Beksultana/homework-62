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
        return (
            <Fragment>
                <button className={'btn'} onClick={this.gotoHomePage}>Go to Home</button>
                <hr/>
                <div className='Country'>
                    {
                        this.state.countries.map((country, index) => (
                            <div onClick={() => this.props.history.push('/country/' + country.name.toLowerCase())}
                                key={index}
                                className="countryBlock"

                            >
                                <img
                                    className={'Countries'}
                                    src={country.flag} alt=""/>

                                <h3 className={'NameCountries'} key={index}>{country.name}</h3>
                            </div>
                        ))
                    }
                </div>
            </Fragment>
        );
    }
}

export default Country;