import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import axios from '../../node_modules/axios/index';

const NewsList = ({category}) => {
  //아래에서 채워줘야 하므로 초기화는 null
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  //useEffect로 마운트까지 기다림
  useEffect(
    () => {
      //async로 요청처리
      const fetchData = async () => {
        setLoading(true);
        const query = (category == 'all' ? '' : '&category='+category);
        const apiUrl = "https://newsapi.org/v2/top-headlines?country=kr&apiKey=5254e931c6644eef8bb4827d81e97204" + query;
        const response = await axios.get(apiUrl);
        setArticles(response.data.articles);
        setLoading(false);
      };
      fetchData();
    },[category]
  )
  //마운트 이후에 데이터가 들어오므로, 리랜더링시에만 처리하도록

  if(loading){
    return <>대기 중</>;
  }
  if(!articles) {
    return null;
  }
  if(!articles){
    return null;
  }
  return (
    <>
      {articles.map((article) => (<NewsItem key={article.url} article={article} />))}
    </>
  );
};

export default NewsList;