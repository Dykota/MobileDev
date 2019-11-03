import React from "react";
import Card from "../Card";

class CardList extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {periods: []};
    
      }
    
    render() {
    return(
        <div className="card">
            {
                this.state.periods.map((card, index) => {
                return <Card 
                    key={index}
                    name={card.name} 
                    temperature={card.temperature}
                    temperatureUnit={card.temperatureUnit}
                    detailedForecast={card.detailedForecast} 
                    />
            })
            }
        </div>
    );
    }

    componentDidMount() {

        fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({periods: data.properties.periods});
        })
        .catch(() => console.log("Errors!"))

    }

}

export default CardList;
