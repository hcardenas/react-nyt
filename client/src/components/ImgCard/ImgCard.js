import React, { Component } from 'react';
import { Row, CardPanel, Col} from 'react-materialize';

export default class ImgCard extends Component {
	render() {
		return (
			<div>

			
			<Row>
				<Col m={12} l={12} s={12}>
					<CardPanel className="z-depth-4">
					<Row className=" valign-wrapper">
						
						<div className="col s10 offset-s1">
							<img atl="" className="responsive-img" src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-394636.jpg" />				
						</div>
						
					</Row>
					<Row className="valign-wrapper" >
						
						<div className="col s4 offset-s4">
			              <span className="black-text">
			                Welcome to the NyT News Feed.
			              </span>
			             </div>
			            
					</Row>
					</CardPanel>
				</Col>
			</Row>
			
			</div>
		);
	}
}
