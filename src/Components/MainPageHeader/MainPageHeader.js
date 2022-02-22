import React from "react";
import './MainPageHeader.css';

export default function MainPageHeader({ filterOption }) {
  let headerText = 'Top Stories'
  if (filterOption) {
    headerText = filterOption + ' News';
  }

  return (
    <h1>{headerText}</h1>
  )
}