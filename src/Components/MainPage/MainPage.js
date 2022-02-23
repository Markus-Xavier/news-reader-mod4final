import React, { useEffect, useState } from "react";
import './MainPage.css';
import { getStories } from "../../Services/API/api";
import { createListFromArray, filterDataByProperty } from "../../Services/DataManagement/dataManagement";
import MainPageHeader from "../MainPageHeader/MainPageHeader";
import MainPageSection from "../MainPageSection/MainPageSection";

export default function MainPage() {
  const [filterOption, setFilterOption] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setFilterOption('');
    getStories('home')
      .then(data => setArticles(data.results));
  }, []);

  useEffect(() => {
    if(filterOption) {
      getStories(filterOption)
        .then(data => setArticles(data.results));
    }
  }, [filterOption]);

  const createPageSections = (sectionTitles) => {
    if(sectionTitles) {
      return sectionTitles.map(sectionTitle => <MainPageSection filterOption={filterOption ? filterOption : 'home'} sectionTitle={sectionTitle} articles={filterDataByProperty(articles, 'section', sectionTitle)}/>);
    }
  };

  return (
    <>
      <MainPageHeader filterOption={filterOption}/>
      {createPageSections(createListFromArray(articles, 'section'))}
    </>
  )
}