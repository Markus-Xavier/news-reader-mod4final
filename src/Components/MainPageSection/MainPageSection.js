import React from "react";
import './MainPageSection.css';

export default function MainPageSection({ sectionTitle }) {
  console.log(sectionTitle)
  return(
    <h1>{sectionTitle}</h1>
  )
};