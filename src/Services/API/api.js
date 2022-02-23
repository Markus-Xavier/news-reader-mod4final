const apikey = 'mNyPLZqzUpCRCkezHpyN4hJ05A4GShgk'

const getStories = async (category) => {
  try {
    return (await fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${apikey}`)).json();
  } catch (error) {
    console.log(error);
  }
}

export { getStories };