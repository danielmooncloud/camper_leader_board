import React from 'react';
import ReactDOM from 'react-dom';
import './scss/application.scss';
import TableHead from './components/TableHead.jsx';
import Tr from './components/Tr.jsx';
import axios from 'axios';


class Application extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}

	recent() {
		return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
				.then(response => this.setState({ data: response.data }))
				.catch(error => console.log(error))
	}

	allTime() {
		return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
				.then(response => this.setState({ data: response.data }))
				.catch(error => console.log(error))
	}

	componentDidMount() {
		this.recent();		
	}


	render() {
		let tr = this.state.data.map((obj, index) => <Tr key={index} index={index} data={obj}/> )

		return (
			<div className="main">
				<table>
					<TableHead recent={this.recent.bind(this)} allTime={this.allTime.bind(this)}/>
					<tbody>
						{tr}
					</tbody>
				</table>
				
			</div>
		)
	}
}



ReactDOM.render(<Application />, document.getElementById('app'));



