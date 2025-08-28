import React from "react";
import "./Ticket.css";

export default class Ticket extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            countriesData: {
                Iran: ["Tabriz", "Tehran", "Shiraz", "Esfahan", "Mashhad"],
                Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
                US: ["Los Angles", "San Diego", "Chicago"],
            },
            mainCountryCities: []
        }

        this.handleCountryChange = this.handleCountryChange.bind(this)
    }

    handleCountryChange(event) {
        const selectedCountry = event.target.value
        if (selectedCountry !== "-1") {
            this.setState({
                mainCountryCities: this.state.countriesData[selectedCountry]
            })
        } else {
            this.setState({
                mainCountryCities: []
            })
        }
        
    }


    render() {
        return (
            <div className="container">
                <div className="col-md-6 box">
                    <input className="fnameInput" placeholder="First Name" />
                </div>

                <div className="col-md-6 box">
                    <input className="lnameInput" placeholder="Last Name" />
                </div>
                <div className="col-md-6 box">
                    <input className="phoneInput" placeholder="Phone Number" />
                </div>
                <div className="col-md-6 box">
                    <input className="emailInput" placeholder="Email" />
                </div>
                <div className="col-md-6 box">
                    <select className="countrySelect" onChange={this.handleCountryChange}>
                        <option value="-1">Please Select ...</option>
                        {Object.keys(this.state.countriesData).map((country) => 
                            <option className="option" key={country} value={country}>
                                {country}
                            </option>
                        )}
                    </select>
                </div>
                <div className="col-md-6 box">
                    <select className="citySelect">
                            <option value="-1">Please Select City</option>

                    </select>
                </div>
                <div className="col-md-12 box">
                    <button className="btn">Book a ticket</button>
                </div>
            </div>

        )
    }
}
