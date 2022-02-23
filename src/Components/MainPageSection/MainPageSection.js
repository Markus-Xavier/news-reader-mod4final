import React from "react";
import './MainPageSection.css';
import ArticlePreview from "../ArticlePreview/ArticlePreview";

export default function MainPageSection({ sectionTitle, articles }) {
  let articlePreviews = '';

  articlePreviews = articles.map(article => <ArticlePreview
    title={article.title} 
    publishDate={article.publish_date}
    writtenBy={article.byline}
    previewImage={article.multimedia[2]}
    />);

  return(
    <>
      <h1>{sectionTitle}</h1>
      {articlePreviews}
    </>
  )
};