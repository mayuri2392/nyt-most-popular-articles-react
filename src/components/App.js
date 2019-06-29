import React, { Component } from 'react';
import ArticlesList from './ArticlesList'
import Nav from './Nav'
import '../scss/App.scss';
import { getArticles } from '../helpers/network';

class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
				articles: []
		}
  }
  
componentDidMount(){
  getArticles().then((data) => {
    this.setState({articles : data.results});
    });
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
