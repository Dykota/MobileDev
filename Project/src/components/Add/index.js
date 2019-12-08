import React from "react";

class Add extends React.Component {
  
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            number: ""
        };
    }

    componentDidMount = () => {

        fetch("http://apiexample.website/contacts/add", {
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
    
    data = () => {
        let name = this.state.name;
        console.log(name);

        let number = this.state.number;
        console.log(number);
        
        return(
            {
            "name": name,
            "number": number
            }    
        );
    }

    getValue = (event) => {

        event.preventDefault();
    
        const name = document.querySelector("#name").value;
        const number = document.querySelector("#number").value;
    
        this.setState({"name": name, "number": number});

        this.data();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.getValue}>
                    <input type="text" id="name" />
                    <input type="text" id="number" />
                    <button>SUBMIT</button>
                </form>
            </div>
        );
    }

}

export default Add;