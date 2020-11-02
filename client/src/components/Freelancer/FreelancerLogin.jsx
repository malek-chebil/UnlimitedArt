import React from "react"
import axios from 'axios';

import { withRouter } from "react-router-dom";

class FreelancerLogin extends React.Component {
    constructor(props){
        super(props)
		this.state={
			Email:"",
            Password:"",
		}
		this.Login=this.Login.bind(this)
	}
	
	Login(e) {
		e.preventDefault();
		axios({
			url: '/api/freeLancers/Login',
			method: 'post',
			data: {
				Email: this.state.Email,
				Password: this.state.Password
			}
		}).then(data => {
			console.log(data.data)
			if(!data.data.Login){
				alert("Check Again")
			}else{
				this.props.history.push("/");
			}

		}).catch(err => console.log(err))       
	
};
render() {
        return <div>
        
<div className="wrapper" style={{"backgroundImage": 'url(images/bg-registration-form-2.jpg)',"backgroundRepeat":"no-repeat","backgroundSize":"cover",background:"black"}}>
			<div className="inner" style={{"backgroundRepeat":"no-repeat","backgroundSize":"cover",backgroundPosition:"center",marginBottom:"50px",marginTop:"30px"}}>
				<form  action="" method=""  onSubmit={this.Login}>
					<h3>FreeLancer-Login</h3>

				  <div className="form-wrapper">
					<label for="">Email</label>
					<input type="text" className="form-control" onChange={(e)=>{
						this.setState({Email:e.target.value})
					}}/>
				  </div>

					<div className="form-wrapper">
						<label for="">Password</label>
						<input type="password" className="form-control" onChange={(e)=>{
						this.setState({Password:e.target.value})
					}}/>
					</div>
					<button>Register Now</button>
				</form>
			</div>
	</div>
   
</div>
  }
}
export default withRouter(FreelancerLogin)

