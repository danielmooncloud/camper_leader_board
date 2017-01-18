import React from 'react';


export default class TableBody extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		var tr = this.props.data.map(function(obj, index) {
			return (
				<tr key={index}>
					<td className="col1">{index + 1}</td>
					<td className="col2"><img src={obj.img}/><span>{obj.username}</span></td>
					<td className="col3">{obj.recent}</td>
					<td className="col4">{obj.alltime}</td>
				</tr>)
		})
		return (
			<tbody>
				{tr}
			</tbody>
		)
	}
}

TableBody.propTypes = {
	data: React.PropTypes.arrayOf(React.PropTypes.shape({
		img: React.PropTypes.string.isRequired,
   username: React.PropTypes.string.isRequired,
	 recent: React.PropTypes.number.isRequired,
	alltime: React.PropTypes.number.isRequired

	}))
}