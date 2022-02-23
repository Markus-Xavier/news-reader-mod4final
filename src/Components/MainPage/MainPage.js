import React, { useState } from "react";
import './MainPage.css';
import MainPageHeader from "../MainPageHeader/MainPageHeader";
import MainPageSection from "../MainPageSection/MainPageSection";

export default function MainPage() {
  const [filterOption, setFilterOption] = useState('');

  return (
    <>
      <MainPageHeader filterOption={filterOption}/>
    </>
  )
}