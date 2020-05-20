import React from 'react';


class Signin extends React.Component {
	//console.log('inside submit');
	constructor(props){
		super(props);
		this.state={
			signInEmail:'',
			signInPassword:'',
		}
	}

	onEmailChange=(event)=>{
		this.setState({signInEmail:event.target.value})
	}

	onPasswordChange=(event)=>{
		this.setState({signInPassword:event.target.value})
	}

	onSubmitSignIn=(event)=>{
		event.preventDefault();
		//console.log(this.state);
		//fetch by default use GET method to API server,so use othe method we have to describe it by creating object.
		//JSON.stringify() used to convert javascript object to JSON 
		fetch('https://immense-depths-47217.herokuapp.com/signin' ,{
			method:'post',
			headers:{'content-Type': 'application/json'},
			body:JSON.stringify({
				email:this.state.signInEmail,
				password:this.state.signInPassword
			})
		}) 
		.then(response => response.json())
		.then (user => {
			if(user.id){
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			} else if(user==="wrong credentials"){
                 window.alert("You have Entered wrong Credentials. Please Register and try Again!! ");
			}else if(user==="wrong credential"){
				window.alert("You have Entered wrong Email or Password . Please try Again!! ");
			}else{
				window.alert("You have to Enter Email and Password . Please try Again!! ");
			}
		})
	}

	render(){
		const {onRouteChange}= this.props;
		return(
		<div >
             <articles className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center ">
				<main className="pa4 black-80">
				  <form className="measure " onSubmit={this.onSubmitSignIn}>
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				           onChange={this.onEmailChange}
				           className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				           type="email" 
				           name="email-address"  
				           id="email-address"
				           placeholder="Enter Email"
				           required
				         />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				          onChange={this.onPasswordChange}
				          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				          type="password" 
				          name="password"  
				          id="password"
				          placeholder="Enter Password"
				          required
				         />
				      </div>
				    </fieldset>
				    <div className="">
                        {/* onClick={this.onSubmitSignIn}*/}
				      <input 
				       className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				       type="submit" 
				       value="Sign in"
				      />
				    </div>
				    <div className="lh-copy mt3">
				      <p 
				        onClick={()=>onRouteChange('register')} 
				        className="f5 link dim black db pointer">
				        Register
				      </p>
				    </div>
				  </form>
				</main>
			</articles>
		</div>

	);
	}
	

}

export default Signin;