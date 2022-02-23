import React from "react";
import './MainPageSection.css';
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import { createArticleID } from "../../Services/DataManagement/dataManagement";

export default function MainPageSection({ sectionTitle, articles }) {
  let articlePreviews = '';

  articlePreviews = articles.map(article => <ArticlePreview
    id={createArticleID(article.short_url)}
    title={article.title} 
    publishDate={article.published_date}
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