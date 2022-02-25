import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleStory } from "../../Services/API/api";
import'./DetailPage.css';

export default function DetailPage() {
  const [articleData, setArticleData] = useState('');
  const { id, category } = useParams();

  useEffect(() => {
    getSingleStory(id, category)
    .then(articleData => setArticleData(articleData));
  }, []);

  const displayData = () => {
    if(articleData) {
      return (
        <>
      <h1>{articleData.title}</h1>
      <p>{articleData.byline}</p>
      <img className="detail_img" src={articleData.multimedia[1].url}/>
      <p>{articleData.multimedia[1].caption} copyright: {articleData.multimedia[1].copyright}</p>
      <p>{articleData.abstract}</p>
        </>)
    }
    return '';
  }

  return displayData();
}