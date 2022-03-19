import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

  state = {
      name: "",
      email: "",
      message: "",
      project: "off",
      hiring: "off"
  }

  handleChange = (inputElement, e) => {
      console.log(this.state);
      this.setState({
          [inputElement]: e.value
      })
  }

  handleButton = (type, e) => {
    let notOn;
    type === "hiring" ? notOn = "project" : notOn = "hiring"; 
      this.setState({
          [type]: e.target.value,
          [notOn]: "off"
      })
  }

  resetForm = () => {
    this.setState ({
        name: "",
        email: "",
        message: "",
        project: "off",
        hiring: "off"
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("sending");
    axios.post("/api/email", this.state).then((response)=>{
        if (response.data.msg === 'success'){
            alert("Message Sent."); 
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
  }

  render() {
    return (
              <React.Fragment>
     
      </React.Fragment>
    )
  }
}

  export default Contact;