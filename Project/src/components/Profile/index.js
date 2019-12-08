import React from "react";
import './index.css';

class Profile extends React.Component {
  
    constructor(props) {
        super(props);
    
        this.state = {
            name: "",
            count: 0
        };
    }
    
    render() {
        return (
          <div className = "profile">
            <p>{this.state.name}, {this.state.count} contacts</p>
          </div>
        );
    }

    componentDidMount() {

    window.fetch("https://apiexample.website/profile", {headers: {API: "baker"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState({name: data.name});
      this.setState({count: data.count})
    });

    }

}

export default Profile;