import React, { Component } from 'react';
import {Collection, CollectionItem, Row, Input, Collapsible, CollapsibleItem, Toast} from 'react-materialize';
import API from "../../utils/API";




export default class Home extends Component {

	state = {
		topic : "",
		start : "",
		end: "",
		data: []
	};


	handleInputChange = event => {
	    const { name, value } = event.target;
	    //console.log(`name: ${name} value: ${value}`);

	    if (name === "start" || name === "end") {
	    	let arr = value.split(" ");
	    	this.setState({
	    		[name]: `${arr[2]}${this.getMonth(arr[1])}${(arr[0].length === 1 ? `0${arr[0]}` : arr[0])}`
	    	});
	    }
	    else {
		    this.setState({
		      [name]: value
		    });
		}

  	};

  	handleFormSubmit = event => {
	    event.preventDefault();
	    const query = {
	    	q: this.state.topic,
	    	start: this.state.start,
	    	end: (this.state.end === "" ? 20170101 : this.state.end)
	    };

	    API.getArticlesNYT(query)
	    .then(res => {
	    	this.setState({ data: res.data.response.docs})
	    	console.log(res.data.response.docs);
	    })
	    .catch( err => console.log(err));
	}

	getMonth(month) {
		const months = {
			"January,"	: "01", 
			"February,"	: "02",
			"March,"	: "03", 
			"April,"	: '04', 
			"May,"		: '05', 
			"June,"		: '06',
			"July,"		: '07', 
			"August,"	: '08', 
			"September,": '09', 
			"October,"	: '10', 
			"November,"	: '11', 
			"December,"	: '12'
		};
		return months[month];
	}

	render() {
		return (
			<div>	
				<Collection header='Search' className="center-align">
					<CollectionItem>
						<Row>
							<Input label="Topic" s={10} onChange={this.handleInputChange} name="topic" />
							<Input type="date" label="Start Year" s={10} placeholder='1989' onChange={this.handleInputChange} name="start" />
							<Input type="date" label="End Year" s={10} placeholder='2017' onChange={this.handleInputChange} name="end" />
							<a className="waves-effect waves-light btn indigo darken-4" onClick={this.handleFormSubmit}><i className="material-icons left">cloud</i>Submit</a>
						</Row>
					</CollectionItem>		
				</Collection>
				{
					this.state.data.length === 0 ?  
						<div>
							<Collection header='Results' className="center-align">
								<CollectionItem>
									<Row>
										<p>Enter Search items to begin</p>
									</Row>
								</CollectionItem>		
							</Collection>
						</div> :
						<div>
							<Collapsible accordion>
								{
									this.state.data.map(ele => {
									const title = ele.headline.main;
									const date = ele.pub_date;
									const url = ele.web_url;
									const key = url;
									return (
									
										<CollapsibleItem header={title} icon='filter_drama' key={key}>
											{date}
											<a  className="waves-effect waves-light btn  grey lighten-1 right" href={url} target="_blank">
												<i className="material-icons left">
													cloud
												</i>
												View Article
											</a>
											<a className="waves-effect waves-light btn indigo darken-4 right" 
												onClick={(event) => {API.saveArticle({title: title, date: date, url: url})}}>
												<i className="material-icons left">
													cloud
												</i>
												save
											</a>		
										</CollapsibleItem>);
									})
								}
							</Collapsible> 
						</div>
				}
			</div>
		);
	}
}
