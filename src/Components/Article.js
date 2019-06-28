import React from 'react'
import './Article.css';
import arrow from '../Images/arrow.png';
import circle from '../Images/circle.png';
import date from '../Images/date.png';

const Article = ({article}) => {
  return(
  <div className="card" id={article.id}>
  <div className="container" onClick={() => window.open(article.url)}>
  <div className="leftbox"><img id="circle" src={circle} alt={"circle"}/> </div>
  <div className="middlebox">
  <div className="title">{article.title}</div>
  <div className="wrapper">
  <div className="left">{article.byline}</div>
  <div className="right">
    <img id="date" src={date} alt={"date"}/>
    <div id="pdate">{article.published_date}</div>
    </div>
  </div>
  </div>
  <div className="rightbox"><img id="arrow" src={arrow} alt={"arrow"} /></div>
  </div>
  </div>
)
}

export default Article;