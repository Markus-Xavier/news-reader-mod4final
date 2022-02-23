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
}

export { createListFromArray }