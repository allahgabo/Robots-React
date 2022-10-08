import React from 'react';

const Scroll=(props) =>{
	return (
		<div style={{overflow:'scroll',border:'2px solid #D16BA5',hight:'900px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;