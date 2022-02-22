import React, { useState } from "react";
import './MainPage.css';
import MainPageHeader from "../MainPageHeader/MainPageHeader";

export default function MainPage() {
  const [filterOption, setFilterOption] = useState('');

  return (
    <MainPageHeader filterOption={filterOption}/>
  )
}