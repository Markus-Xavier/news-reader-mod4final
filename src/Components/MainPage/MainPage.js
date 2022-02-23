import React, { useEffect, useState } from "react";
import './MainPage.css';
import { getStories } from "../../Services/API/api";
import MainPageHeader from "../MainPageHeader/MainPageHeader";
import MainPageSection from "../MainPageSection/MainPageSection";

export default function MainPage() {
  const [filterOption, setFilterOption] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getStories('home')
      .then(data => setArticles(data.results));
  }, []);

  return (
    <>
      <MainPageHeader filterOption={filterOption}/>
    </>
  )
}