import React, { Component } from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize';


export default class Nav extends Component {
	render() {
		return (
			<Navbar brand={<span><Icon large>comment</Icon> NYT News</span>} right className="indigo darken-4 z-depth-4">
				<NavItem href='/search'>Search</NavItem>
				<NavItem href='/Saved'>Saved</NavItem>
			</Navbar>
		);
	}
}




