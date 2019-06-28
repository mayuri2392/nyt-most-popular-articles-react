import React from 'react';
import Article from './Article';
import './ArticleList.css';

const ArticlesList=(props) => {

const allArticles = props.articles.map((article, index) => <Article key={index} article={article}/>)

    return(
      <div className="articles">
      {allArticles}
      </div>

    )


}

export default ArticlesList;