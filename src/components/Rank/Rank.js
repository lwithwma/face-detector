import React from 'react';

const Rank =({name, entries})=>{
	return(
		<div>
			<div className='black f4'>
			 {`${name}, your current entry count is :`}
			</div>

			<div className='yellow f1'>
			 {entries}
			</div>
		</div>

	);
}

export default Rank;