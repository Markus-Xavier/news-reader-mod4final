import React from "react";
import { useParams } from "react-router-dom";
import'./DetailPage.css';

export default function DetailPage() {
  const { id, category } = useParams();
  return (
    <>
      <h1>Hi Detail Page</h1>
    </>)
}