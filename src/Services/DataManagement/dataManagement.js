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

export { createListFromArray, filterDataByProperty };