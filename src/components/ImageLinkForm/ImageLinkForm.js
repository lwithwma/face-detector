import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm =({onInputChange,onButtonSubmit})=>{
	return(
			<div className='center'>
			 <div className='form  center pa4 br4 shadow-5'>
				  <input className='f4 pa2 w-70 center' type='tex'onChange={onInputChange} placeHolder="Enter image URL"/>
				  <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>
				     Detect 
				  </button>
			  </div>
			</div>

	);

}

export default ImageLinkForm;