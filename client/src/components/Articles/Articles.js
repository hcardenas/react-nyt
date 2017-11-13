import React, { Component } from 'react';
import {CollapsibleItem, Collapsible} from 'react-materialize';
import API from "../../utils/API";

export default class Articles extends Component {
	render() {
		return (
			<div>

				<Collapsible accordion>
					{
						this.props.data.map(ele => {
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
								<a className="text-white waves-effect waves-light btn indigo darken-4 right" 
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
		);
	}
}
