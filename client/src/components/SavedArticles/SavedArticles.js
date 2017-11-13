import React, { Component } from 'react';
import {CollapsibleItem, Collapsible} from 'react-materialize';
import API from "../../utils/API";

export default class SavedArticles extends Component {

	state = {
		data : []
	};

	componentDidMount() {
		this.setState({
			data: this.props.data
		});
	}


	render() {
		return (
			<div>
				<Collapsible accordion>
					{
						this.props.data.map(ele => {
						const title = ele.title;
						const date = ele.date;
						const url = ele.url;
						const id = ele._id;
						return (
						
							<CollapsibleItem header={title} icon='filter_drama' key={id}>
								{date}
								<a  className="waves-effect waves-light btn  grey lighten-1 right" href={url} target="_blank">
									<i className="material-icons left">
										cloud
									</i>
									View Article
								</a>
								<a className="text-white waves-effect waves-light btn red darken-4 right" 
									onClick={ () => { 
										this.props.handleDelete(id);
										this.props.that.setArticleData(id);
									}  }>
									<i className="material-icons left">
										cloud
									</i>
									delete
								</a>		
							</CollapsibleItem>);
						})
					}
				</Collapsible>		
			</div>
		);
	}
}
