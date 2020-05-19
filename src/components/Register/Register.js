import React from 'react';


class Signin extends React.Component {
	//console.log('inside submit');
	constructor(props){
		super(props);
		//initial values of the states. State is javascript object
		this.state={
			registerName: '',
			registerEmail: '',
			registerPassword:''
		}
	}
	onNameChange=(event)=>{
		//console.log(this.state.registerName);
		this.setState({registerName:event.target.value});
	}

	onEmailChange=(events)=>{
	  //console.log(this.state.registerEmail);
	  this.setState({registerEmail:events.target.value});

	}

	onPasswordChange=(events)=>{
		//console.log(this.state.registerPassword)
		this.setState({registerPassword:events.target.value});
	}
    
   onSubmitRegister=()=>{
		//console.log(this.state);
		//fetch by default use GET method to API server,so use othe method we have to describe it by creating object.
		//JSON.stringify() used to convert javascript object to JSON 
		fetch('http://localhost:3000/register' ,{
			method:'post',
			headers:{'content-Type': 'application/json'},
			body:JSON.stringify({
				name:this.state.registerName,
				email:this.state.registerEmail,
				password:this.state.registerPassword
			})
		}) 
		.then(response => response.json())
		.then (user => {
			if(user.id){
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
		})
	}


	render(){
		return(
		<div >
             <articles className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 black-80">
				  <div className="measure ">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f1 fw6 ph0 mh0">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				        <input 
				          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				          type="text" 
				          name="name"  
				          id="name"
				          onChange={this.onNameChange}
				          required
				          placeholder="Enter Name"
				          autoFocus
				        />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				          type="email" 
				          name="email-address"  
				          id="email-address"
				          onChange={this.onEmailChange}
				          placeholder="Enter Email "
				          required
				        />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				          type="password" 
				          name="password"  
				          id="password"
				          onChange={this.onPasswordChange}
				          placeholder="Enter Password"
				          required
				        />
				      </div>

				      {/*<div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Repeat Password</label>
				        <input 
				          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				          type="password" 
				          name="password"  
				          id="password"
				          onChange={this.onPasswordChange}
				          placeholder="Repeat Password"
				          required
				        />
				      </div>*/}
				    </fieldset>
				    <div className="">
				      <input
					       onClick={this.onSubmitRegister}
					      //onClick={()=>this.props.onRouteChange('home')}
					       className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
					       type="submit" 
					       value="Register"
				      />
				    </div>
				  </div>
				</main>
			</articles>

		 
		  
		</div>

	);
	}
	

}

export default Signin;