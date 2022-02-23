import React from 'react';
import { Link } from 'react-router-dom';
import './ArticlePreview.css';

export default function ArticlePreview({ id, title, publishDate, writtenBy, previewImage, filterOption }) {
  return (
    <Link to={`/${filterOption}/${id}`}>
      <>
        <p>{title}</p>
        <p>{writtenBy}</p>
        <p>{publishDate}</p>
        <img src={previewImage.url}/>
      </>
    </Link>
  )
}