import React, {PropTypes} from 'react';


 const TableHead = props => {
	
	return (
		<thead className="table-head">
			<tr>
				<th className="col1">#</th>
				<th className="col2">Camper</th>
				<th className="col3"><a href="#" onClick={props.recent}>Points in past 30 days</a></th>
				<th className="col4"><a href="#" onClick={props.allTime}>All Time Points</a></th>
			</tr>
		</thead>
	)
}

TableHead.propTypes = {
	recent: PropTypes.func.isRequired,
	allTime: PropTypes.func.isRequired
}

export default TableHead;