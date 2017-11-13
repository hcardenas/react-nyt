import React, { Component } from 'react';
import API from "../../utils/API";
import SavedArticles from '../../components/SavedArticles';


export default class Saved extends Component {


  	state = {
		data: []
	};

	componentDidMount() {
		
		console.log ("inside componentDidMount");
	
		this.setArticleData();
	};

	handleDelete(id) {
		API.deleteArticle(id).then((res) => console.log(res) );
		
	}

	setArticleData() {
		API.getArticles()
		.then((articles)=>{
			console.log(articles.data);
			this.setState({data: articles.data});
		})
	}


  render() {
    return (
      <div>
        <SavedArticles 
        	data={this.state.data} 
        	handleDelete={this.handleDelete} 
        	setArticleData={this.setArticleData}
        	that={this}
        />
        
      </div>
    );
  }
}
