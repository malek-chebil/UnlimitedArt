import React from "react"
import axios from 'axios';
import { withRouter } from "react-router-dom";
import SelectState from "../Elements/selectstate.jsx"
import Ageinout from "../Elements/ageinput.jsx"
import SelectField from "../Elements/FreelancerField.jsx"

class FreelancerSingup extends React.Component {
    constructor(props){
        super(props)
		this.state={
			state:"",
			age:null,
			field:"",
			firstName: "",
			lastName: "",
			Email: "",
			password: "",
			repass: "",
			gender: "",
			adress: "",
		}
		this.handelstatechange=this.handelstatechange.bind(this)
		this.chandleSubmit=this.chandleSubmit.bind(this)
		this.handelagechange=this.handelagechange.bind(this)
		this.handelfieldchange=this.handelfieldchange.bind(this)
		this.handleChange=this.handleChange.bind(this)
		this.handleClick=this.handleClick.bind(this)
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

handelfieldchange(field){
	this.setState({field})
}

handleClick(e) {
    e.preventDefault();
    let freelancerData = {
      FirstName: this.state.firstName,
      LastName: this.state.lastName,
      Email: this.state.Email,
      Password: this.state.password,
      Gender: this.state.gender,
      Age: this.state.age,
      City: this.state.state,
      Adresse: this.state.adress,
      Field: this.state.field,
    };
    if (this.state.password === this.state.repass) {
      axios
        .post("/api/freeLancers/Signup", freelancerData)
        .then((data) => {
          console.log(data.data);
       if(data.data.Signup){
		   this.props.history.push("/FreelancerLogin");
	   }
        })
        .catch((e) => {
          console.log(e);
        });
    }else{
		alert("Check Password")
	}
  }

  handleChange(e) {
    var name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
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
						<div className="form-wrapper">
						<SelectField field={this.handelfieldchange}/>
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
							<input type="text" className="form-control" name="adress" type="text" size="18" onChange={this.handleChange}/>
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
export default withRouter(FreelancerSingup)

