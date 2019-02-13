import React, { Component } from 'react';
export default class MainContainer extends Component {
  state = {
        news: []
    }
   getNews = async () => {

    try {
      const news = await fetch('https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=121f5e36713247dd8909dd3d26db8256');
      const newsJson = await news.json();
      this.setState({news: newsJson.articles});
      return newsJson
    } catch (err) {
      console.log(err, 'error in catch block')
      return err
  }

}


 componentDidMount(){
    this.getNews().then((data) => console.log(data,'from famous quotes'));
  } 



render(){
const newsList = this.state.news.map((news, index)=>{
return <li key={index}>{news.description}</li>
})
    return (
         <div className="NewsList">
         
         <h3>News</h3>
         <ul>{newsList}</ul>
         </div>
      )
	
}

}
