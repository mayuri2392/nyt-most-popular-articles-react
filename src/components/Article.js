import React from 'react'
import '../scss/Article.scss';
import arrow from '../images/arrow.png';
import circle from '../images/circle.png';
import date from '../images/date.png';


const Article = ({article}) => {
  return(
  <div className="card" id={article.id}>
    <div className="container" onClick={() => window.open(article.url)}>
      <div className="circlebox"><img id="circle" src={circle} alt={"circle"}/> </div>
      <div className="infobox">
        <div className="title">{article.title}</div>
        <div className="wrapper">
          <div className="byline">{article.byline}</div>
          <div className="published-date">
            <img id="date" src={date} alt={"date"}/>
            <div id="published-date">{article.published_date}</div>
          </div>
        </div>
      </div>
      <div className="arrowbox"><img id="arrow" src={arrow} alt={"arrow"} /></div>
    </div>
  </div>
  )
}

export default Article;