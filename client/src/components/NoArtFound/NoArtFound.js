import React, { Component } from 'react';
import {Collection, CollectionItem, Row} from 'react-materialize';

export default class NoArtFound extends Component {
	render() {
		return (
			<div>

				<Collection header='Results' className="center-align">
					<CollectionItem>
						<Row>
							<p>Enter Search items to begin</p>
						</Row>
					</CollectionItem>		
				</Collection>		
			</div>
		);
	}
}
