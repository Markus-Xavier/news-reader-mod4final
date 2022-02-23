import { findArticleByID } from "../DataManagement/dataManagement";

const apikey = 'mNyPLZqzUpCRCkezHpyN4hJ05A4GShgk';
const baseURL = 'https://api.nytimes.com/svc/topstories/v2';

const getStories = async (category) => {
  try {
    return (await fetch(`${baseURL}/${category}.json?api-key=${apikey}`)).json();
  } catch (error) {
    console.log(error);
  }
}

const getSingleStory = async (id, category) => {
  try {
    const articles = await (await (fetch(`${baseURL}/${category}.json?api-key=${apikey}`))).json();
    return findArticleByID(articles.results, id);
  } catch (error) {
    console.log(error);
  }
}

export { getStories, getSingleStory };