import React from "react";
import './MainPageHeader.css';

export default function MainPageHeader({ filterOption }) {
  let headerText = 'Top Stories'
  if (filterOption) {
    headerText = filterOption + ' News';
  }

  return (
    <h1 className="main-page_header">{headerText}</h1>
  )
}