import React from "react";

class Remove extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            number: ""
        };
    }

    componentDidMount = () => {

        fetch("https://apiexample.website/contacts/remove", {
            "method": "POST",
            "mode": "no-cors",
            "headers": {
              "acceptapi": "baker",
              "content-type": "application/json",
              "accept": "application/json"
            },
            "body": JSON.stringify(this.data())
          })
    }
    
    render() {
        return (
          <div>
           
          </div>
        );
      }

}

export default Remove;