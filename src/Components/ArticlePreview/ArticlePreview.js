import React from 'react';
import { Link } from 'react-router-dom';
import './ArticlePreview.css';

export default function ArticlePreview({ id, title, publishDate, writtenBy, previewImage, filterOption }) {
  return (
    <Link to={`/${filterOption}/${id}`}>
      <div className="article-preview_display">
        <img src={previewImage.url}/>
        <div>
          <p className="article-preview_title">{title}</p>
          <div className="article-preview_info-display">
            <p>{writtenBy}</p>
            <p>{publishDate}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}