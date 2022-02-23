const createListFromArray = (dataSet, property, repeat) => {
  if(dataSet.length && !repeat) {
    return dataSet.reduce((prevDataPoint, currentDataPoint) => {
      if(!prevDataPoint.includes(currentDataPoint[property])) {
        prevDataPoint.push(currentDataPoint[property]);
      }
      return prevDataPoint;
    }, []);
  }

  return [];
};

const filterDataByProperty = (dataSet, property, compareItem) => {
  return dataSet.filter(data => data[property] === compareItem);
}

const createArticleID = (articleShortURL) => {
  return articleShortURL.substring(articleShortURL.lastIndexOf("/") + 1, articleShortURL.length);
}

export { createListFromArray, filterDataByProperty, createArticleID };