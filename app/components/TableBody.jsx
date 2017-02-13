import React from 'react';
import Tr from './Tr.jsx';

 

 const TableBody = props => {
	
	let tr = props.data.map((obj, index) => 
		
		<Tr key={index} 
			index={index}
			data={obj}
		/>		
	)
		
	return (
		<tbody>
			{tr}
		</tbody>
	)
	
}


export default TableBody;
