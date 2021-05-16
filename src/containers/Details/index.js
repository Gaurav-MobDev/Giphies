import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Style from './style';
import {LocalPath, COLOR, HelperFunctions} from '../../utility';
import {
  setFavouriteAction,
  removeFavouriteAction,
  getGiphyAction,
} from '../redux';
const {
  LOCAL_IMAGES_PATH: {like},
} = LocalPath;
const {RED, SKY_BLUE} = COLOR;
const {likeGiphy, addFavourite} = HelperFunctions;
const Details = () => {
  const {
    details: {url, type, rating, id},
    giphies,
    favourites,
    selectedIndex,
  } = useSelector(state => state.giphyReducer);
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const [imageType, setImageType] = useState();
  const [imageRating, setImageRating] = useState();
  const [loading, setLoader] = useState(true);
  const [addLike, setLike] = useState(false);

  useEffect(() => {
    setImage(url);
    setImageType(type);
    setImageRating(rating);
  }, [url, type, rating]);

  useEffect(() => {
    checkLike();
  }, []);

  const likeGiphyAction = () => {
    const giphiesCopy = likeGiphy(selectedIndex, giphies, favourites);
    if (giphiesCopy) {
      dispatch(getGiphyAction([...giphiesCopy]));
      addFavouriteAction(giphiesCopy[selectedIndex].id);
    }
  };

  const addFavouriteAction = giphyid => {
    const isLiked = addFavourite(giphyid, favourites);
    if (isLiked >= 0) {
      dispatch(removeFavouriteAction(id));
      setLike(false);
      return;
    }
    dispatch(setFavouriteAction(id));
    setLike(true);
  };

  const checkLike = () => {
    const favouritesCopy = favourites;
    const isLiked = favouritesCopy.findIndex(item => item === id);
    if (isLiked >= 0) {
      setLike(true);
    }
  };

  return (
    <View style={Style.container}>
      <View>
        <Text style={Style.title}>Details</Text>
        {loading && (
          <View style={Style.loader}>
            <ActivityIndicator size="large" color={SKY_BLUE} />
          </View>
        )}
        <Image
          onLoad={() => {
            setLoader(false);
          }}
          source={{uri: image}}
          style={Style.image}
        />
        <TouchableOpacity
          style={[
            Style.likeButton,
            {backgroundColor: addLike ? RED : SKY_BLUE},
          ]}
          onPress={() => likeGiphyAction()}>
          <Image source={like} />
        </TouchableOpacity>
        <View style={Style.details}>
          <Text style={Style.text}>Type: {imageType}</Text>
          <Text style={Style.text}>Rating: {imageRating}</Text>
        </View>
      </View>
    </View>
  );
};

export default Details;
