import React, { useRef } from "react";
import './CategoryFilter.css';

export default function CategoryFilter({updateFilter}) {
  const categories = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world'];
  const categoryRef = useRef();

  const handleChange = () => {
    updateFilter(categoryRef.current.value);
  }
  const options = categories.map(category => <option value={category}>{category}</option>);
  return (
    <form onChange={handleChange}>
      <select ref={categoryRef}>
        <option value="">Filter By Category</option>
        {options}
      </select>
    </form>
  )
};