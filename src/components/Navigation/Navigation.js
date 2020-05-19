import React from 'react';
import Logo from '../Logo/Logo';
import "./Navigation.css";

const Navigation=({onRouteChange,isSignedIn})=>{
  
		if(isSignedIn){
		  return(
				<nav >
				   <Logo/>
			       <p className='style1' onClick={()=>onRouteChange('signout')}>Sign Out </p>
			    </nav>
		    );
		} else{
           return(
				<nav >
				   <Logo/>
				   <p className=' style1' onClick={()=>onRouteChange('register')}>Register </p>
			       <p className=' style2' onClick={()=>onRouteChange('signin')}>Sign In </p>
			    </nav>
              );
		}
}

export default Navigation