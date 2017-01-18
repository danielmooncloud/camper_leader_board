import React from 'react';


export default class TableHead extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<thead className="table-head">
				<tr>
					<th className="col1">#</th>
					<th className="col2">Camper Name</th>
					<th className="col3"><a href="#" onClick={this.props.recent}>Points in past 30 days</a></th>
					<th className="col4"><a href="#" onClick={this.props.allTime}>All Time Points</a></th>
				</tr>
			</thead>
		)
	}
}

TableHead.propTypes = {
	recent: React.PropTypes.func.isRequired,
	allTime: React.PropTypes.func.isRequired
}