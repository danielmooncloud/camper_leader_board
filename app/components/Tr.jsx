import React, {PropTypes} from "react";


const Tr = props => {			
	return (
		<tr>
			<td className="col1">{props.index + 1}</td>
			<td className="col2"><img src={props.data.img}/><span>{props.data.username}</span></td>
			<td className="col3">{props.data.recent}</td>
			<td className="col4">{props.data.alltime}</td>
		</tr>
	);
};

React.propTypes = {
	index: PropTypes.number.isRequired,
	data: PropTypes.shape({
		img: PropTypes.string.isRequired,
		username: PropTypes.string.isRequired,
		recent: PropTypes.number.isRequired,
		alltime: PropTypes.number.isRequired
	}).isRequired,

};

export default Tr;