import React, { Component } from 'react';

class RegistrationForm extends Component{

  constructor(props){
    super(props);
    this.state = {
      email:''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('Form is submitted');
    console.log('Email:',this.state.email);
  }

  handleEmailChange(event){
    console.log('E-mail:',event.target.value);
    this.setState({email:event.target.value});
  }
  

  render(){
    let buttonText = "Save";
    return (
     <form onSubmit={this.handleSubmit}>
       <input 
        type="text"
        placeholder="E-mail"
        value={this.state.email}
        onChange={this.handleEmailChange}
       />
       <button>{buttonText}</button>
     </form>
    )

  }
}

export default RegistrationForm;