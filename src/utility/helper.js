export const likeGiphy = (index, giphies, favourites) => {
  const giphiesCopy = giphies;
  if (favourites.length >= 5 && !giphiesCopy[index].like) {
    alert('You can add only 5 giphies to your favourite list');
    return;
  }
  giphiesCopy[index].like = !giphiesCopy[index].like;
  return giphiesCopy;
};

export const addFavourite = (giphyid, favourites) => {
  const favouritesCopy = favourites;
  const isLiked = favouritesCopy.findIndex(item => item === giphyid);
  return isLiked;
};
