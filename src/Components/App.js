import React, { Component } from 'react';
import ArticlesList from './ArticlesList'
import Nav from './Nav'
import './App.css';

class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
				articles: []
		}
	}


componentDidMount(){
    this.fetchArticles()
}

fetchArticles=()=>{
  //const API_KEY= process.env.API_KEY;
    //let term=this.state.searchTerm
    fetch(`https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/30.json?api-key=u9G3DVXjf1Qtn6ks8S7W9FN9eJuxFX2s`)
    .then((res) => res.json())
    .then(data => this.setState({articles : data.results}));
}

  
  render() {
    return (
    <div className="App">
      <Nav/>
    <br />
    <ArticlesList articles={this.state.articles} />
    </div>
    )
  }
}

export default App;
