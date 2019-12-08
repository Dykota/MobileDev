import React from "react";
import Card from "../Card";
import "./index.css";

class Contacts extends React.Component {
  
    constructor(props) {
        super(props);
    
        this.state = {contacts: []};
    
      }
    
    componentDidMount() {

        window.fetch("https://apiexample.website/contacts", {headers: {API: "baker"}})
        .then((res) => res.json())
        .then((data) => {
            this.setState({contacts: data.contacts});
        });

    }
    
    render() {
    return (
        <div>

            {
            this.state.contacts.map((contacts, index) => {
                return <Card 
                    key={index}
                    name={contacts.name} 
                    number={contacts.number}
                    dataclick={this.remove} />
            })
            }
        </div>
    );
    }
}

export default Contacts;