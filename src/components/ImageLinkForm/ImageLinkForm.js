import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm =({onInputChange,onButtonSubmit})=>{
	return(
		<div>
		  <p className='f3'> 
		    {'This magic Brain will detect faces in your computer!!'}
		  </p>
		

			<div className='center'>
			 <div className='form  center pa4 br4 shadow-5'>
				  <input className='f4 pa2 w-70 center' type='tex'onChange={onInputChange} placeHolder="Enter URL of image"/>
				  <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>
				     Detect 
				  </button>
			  </div>
			</div>
		</div>

	);

}

export default ImageLinkForm;