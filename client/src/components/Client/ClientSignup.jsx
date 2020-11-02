import React from "react"
import SelectState from "../Elements/selectstate.jsx"
import Ageinout from "../Elements/ageinput.jsx"

import axios from 'axios';
import { withRouter } from "react-router-dom";
class ClientSignup extends React.Component {
    constructor(props){
        super(props)
		this.state={
			state:"",
			age:null,
			firstName: "",
            lastName: "",
            Email: "",
            password: "",
			repass: "",
			age: "",
			gender: "",
			Adresse: "",
		}
		this.chandleSubmit=this.chandleSubmit.bind(this)
		this.handelstatechange=this.handelstatechange.bind(this)
		this.handelagechange=this.handelagechange.bind(this)
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		console.log("called")
		e.preventDefault();
		let clientData = {
		  FirstName: this.state.firstName,
		  LastName: this.state.lastName,
		  Email: this.state.Email,
		  Password: this.state.password,
		  Gender: this.state.gender,
		  Age: this.state.age,
		  City: this.state.state,
		  Adresse: this.state.Adresse,
		};
		if (this.state.password == this.state.password) {
			
		  axios
			.post("/api/Clients/Signup", clientData)
			.then((data) => {
			  console.log(data);
			  if(data.data.Dup){
				  alert("Email-Exist")
			  }else if(data.data.Signup) {
				this.props.history.push("/ClientLogin");
			  }
			})
			.catch((e) => {
			  console.log(e);
			});
		}
	  }
	
	  handleChange(e) {
		var name = e.target.name;
		this.setState({
		  [name]: e.target.value,
		});
	  }

chandleSubmit (event) {
		event.preventDefault();
	  };
	  
handelstatechange(state){
	this.setState({state})
}

handelagechange(age){
	this.setState({age})
}

render() {
        return <div>
            
		<div className="wrapper" style={{"backgroundImage": 'url(images/bg-registration-form-2.jpg)',"backgroundRepeat":"no-repeat","backgroundSize":"cover",background:"black"}}>
					<div className="inner" style={{"backgroundRepeat":"no-repeat","backgroundSize":"cover",backgroundPosition:"center",marginBottom:"50px",marginTop:"30px"}}>
						<form action="" method="" className="" role="form" onSubmit={this.handleClick}>
							<h3>FreeLancer-Signup</h3>
							<div className="form-group">
								<div className="form-wrapper">
									<label for="">First Name</label>
									<input type="text" className="form-control" name="firstName" type="text" size="18" onChange={this.handleChange}/>
								</div>
								<div className="form-wrapper">
									<label for="">Last Name</label>
									<input className="form-control" name="lastName" type="text" size="18"  onChange={this.handleChange}/>
								</div>
							</div>
							<div className="form-group">
								<div className="form-wrapper">
								<Ageinout age={this.handelagechange}/>
								</div>
							</div>				
							
							<div className="form-wrapper">
								<label for="">Email</label>
								<input type="text" className="form-control" name="Email" type="text" size="18" onChange={this.handleChange}/>
							</div>
							<div className="form-wrapper">
								<label for="">Password</label>
								<input type="password" className="form-control" name="password" type="text" size="18" onChange={this.handleChange}/>
							</div>
							<div className="form-wrapper">
								<label for="">Confirm Password</label>
								<input type="password" className="form-control" name="repass" type="text" size="18" onChange={this.handleChange}/>
							</div>
							<div className="form-group">
							<div className="form-wrapper">
									<label for="">Address</label>
									<input type="text" className="form-control" name="Adresse" type="text" size="18" onChange={this.handleChange}/>
								</div>
								<div className="form-wrapper">
								<SelectState state={this.handelstatechange}/>
								</div>
							</div>		
							<div className="checkbox">
								<label>
									<input type="checkbox"/>
					
								</label>
							</div>
							<button>Register Now</button>
						</form>
					</div>
			</div>
		   
		</div>
  }
}
export default withRouter(ClientSignup)

